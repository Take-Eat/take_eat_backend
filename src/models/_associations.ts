import Produto from "./Produto";
import CarrinhoProduto from "./CarrinhoProduto";
import Carrinho from "./Carrinho";
import ProdutoPedido from "./produtoPedido";
import Pedido from "./Pedido";

Carrinho.hasMany(CarrinhoProduto, { foreignKey: "idCarrinho", as: "produtos" });
CarrinhoProduto.belongsTo(Carrinho, { foreignKey: "idCarrinho" });

Produto.hasMany(CarrinhoProduto, { foreignKey: "idProduto" });
CarrinhoProduto.belongsTo(Produto, { foreignKey: "idProduto", as: "produto" });

Produto.hasMany(ProdutoPedido, { foreignKey: "idProduto" });
ProdutoPedido.belongsTo(Produto, { foreignKey: "idProduto" });

Pedido.hasMany(ProdutoPedido, { foreignKey: "idPedido" });
ProdutoPedido.belongsTo(Pedido, { foreignKey: "idPedido" });

/*

// Setup a One-to-Many relationship between User and Grant
User.hasMany(Grant);
Grant.belongsTo(User);

// Also setup a One-to-Many relationship between Profile and Grant
Profile.hasMany(Grant);
Grant.belongsTo(Profile);


// With the Many-to-Many approach, you can do:
User.findAll({ include: Profile });
Profile.findAll({ include: User });
// However, you can't do:
User.findAll({ include: Grant });
Profile.findAll({ include: Grant });
Grant.findAll({ include: User });
Grant.findAll({ include: Profile });

// On the other hand, with the double One-to-Many approach, you can do:
User.findAll({ include: Grant });
Profile.findAll({ include: Grant });
Grant.findAll({ include: User });
Grant.findAll({ include: Profile });
// However, you can't do:
User.findAll({ include: Profile });
Profile.findAll({ include: User });
// Although you can emulate those with nested includes, as follows:
User.findAll({
  include: {
    model: Grant,
    include: Profile,
  },
}); // This emulates the `User.findAll({ include: Profile })`, however
// the resulting object structure is a bit different. The original
// structure has the form `user.profiles[].grant`, while the emulated
// structure has the form `user.grants[].profiles[]`.
*/
