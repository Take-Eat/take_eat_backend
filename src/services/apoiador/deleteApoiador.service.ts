import Apoiador from "../../models/Apoiador";

const deleteApoiadorService = async (id: number) => {
  await Apoiador.destroy({ where: { id } });
};

export default deleteApoiadorService;
