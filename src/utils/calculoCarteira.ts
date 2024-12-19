import { AppError } from "../errors";
import { iCarteiraUpdate } from "../interfaces/carteira.interface";
import { iExtrato, iExtratoCreate } from "../interfaces/extrato.interface";
import Carteira from "../models/Carteira";
import { carteiraCreateSchema } from "../schemas/carteira.schema";
import getCarteiraIdApoiadorService from "../services/carteira/getCarteiraIdApoiador.service";

const verificarValidadeDeSaque = async (payload: iExtratoCreate) => {
  const retrivedCarteira = await getCarteiraIdApoiadorService(
    payload.idApoiador
  );

  if (retrivedCarteira.saldoEatCoin < payload.value) {
    throw new AppError("Saldo insuficiente para realizar o saque", 400);
  }
};

const calcularValoresDaCarteira = async (payload: iExtrato) => {
  const retrivedCarteira = await getCarteiraIdApoiadorService(
    payload.idApoiador
  );

  if (!retrivedCarteira) {
    throw new AppError(
      "Carteira não encontrada para o idApoiador fornecido",
      404
    );
  }

  const parsedCarteira = carteiraCreateSchema.parse(retrivedCarteira);

  const operations: Record<
    string,
    (carteira: typeof parsedCarteira) => iCarteiraUpdate
  > = {
    doacao: (carteira) => ({
      totalDoado: carteira.totalDoado + payload.value,
    }),
    compraEatCoin: (carteira) => ({
      saldoEatCoin: carteira.saldoEatCoin + payload.value,
      totalEatCoin: carteira.totalEatCoin + payload.value,
    }),
    saqueEatCoin: (carteira) => {
      return {
        saldoEatCoin: carteira.saldoEatCoin - payload.value,
      };
    },
  };

  const operation = operations[payload.type];

  if (!operation) {
    throw new AppError(`Operação inválida: ${payload.type}`, 400);
  }

  return operation(parsedCarteira);
};

export { calcularValoresDaCarteira, verificarValidadeDeSaque };
