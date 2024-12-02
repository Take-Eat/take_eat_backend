import "express-async-errors";
import express, { Application, json } from "express";
import path from "path";

import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

import { handleError } from "./errors";
import apoidorRoutes from "./routes/apoiador.routes";
import produtoRoutes from "./routes/produto.routes";

const app: Application = express();
app.use(json());

app.use(express.static(path.join(__dirname, "..", "docs")));

// Rota para renderizar o index.html quando acessarem a raiz '/'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html"));
});

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/apoiador", apoidorRoutes);
app.use("/produto", produtoRoutes);

// não colocar coisas a baixo desse "use"
app.use(handleError);

export default app;
