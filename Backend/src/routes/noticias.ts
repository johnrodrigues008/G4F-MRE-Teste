import { Router } from "express";
import { criarNoticia, editarNoticia, excluirNoticia, listarNoticias } from "../controllers/noticiaController";

const noticiaRouter = Router();

noticiaRouter.post('/noticia', criarNoticia);

noticiaRouter.get('/noticia', listarNoticias);

noticiaRouter.put("/noticia/:id", editarNoticia);

noticiaRouter.delete("/noticia/:id", excluirNoticia);

export { noticiaRouter };
