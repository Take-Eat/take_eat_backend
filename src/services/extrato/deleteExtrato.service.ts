import Extrato from "../../models/Extrato";

const deleteExtratoIdService = async (id: number): Promise<void> => {
  await Extrato.destroy({
    where: { id },
  });

  return;
};

export default deleteExtratoIdService;
