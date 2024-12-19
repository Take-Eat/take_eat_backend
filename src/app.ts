import "express-async-errors";

import "./models/_associations";

import express, { Application, json } from "express";
import path from "path";

import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

import { handleError } from "./errors";
import apoidorRoutes from "./routes/apoiador.routes";
import produtoRoutes from "./routes/produto.routes";
import extratoRoutes from "./routes/extrato.routes";
import doadorRoutes from "./routes/doador.routes";
import entregadorRoutes from "./routes/entregador.routes";
import distribuidorRoutes from "./routes/distribuidor.routes";
import CarteiraRoutes from "./routes/carteira.routes";

const app: Application = express();
app.use(json());

app.use(express.static(path.join(__dirname, "..", "docs")));

// Rota para renderizar o index.html quando acessarem a raiz '/'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html"));
});

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/apoiador", apoidorRoutes);
app.use("/doador", doadorRoutes);
app.use("/entregador", entregadorRoutes);
app.use("/distribuidor", distribuidorRoutes);
app.use("/produto", produtoRoutes);
app.use("/extrato", extratoRoutes);
app.use("/carteira", CarteiraRoutes);

// não colocar coisas a baixo desse "use"
app.use(handleError);

export default app;
