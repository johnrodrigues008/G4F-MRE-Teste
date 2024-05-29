import { app } from "./app";

const port = process.env.PORT || 3001;

app.listen(port, () => {
      console.log(`🔥 Servidor rodando na porta ${port}, url: http://localhost:${port}/`);
});