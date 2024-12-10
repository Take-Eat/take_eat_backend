import Produto from "../../models/Produto";

const deleteProdutoIdService = async (id: number): Promise<void> => {
  await Produto.destroy({
    where: { id },
  });

  return;
};

export default deleteProdutoIdService;
