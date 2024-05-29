import { Request, Response } from "express";
import { NoticiasInterface } from "../interfaces/noticiaInterface";
import {
  deleteNoticia,
  getNoticias,
  postNoticia,
  putNoticia,
} from "../services/noticiaService";

export async function criarNoticia(req: Request, res: Response) {
  try {
    const { id, titulo, descricao } = req.body;

    const noticiaColet: NoticiasInterface = {
      id: id,
      titulo: titulo,
      descricao: descricao,
    };

    const newNoticia = await postNoticia(noticiaColet);

    return res.json(newNoticia);
  } catch (error) {
    return res.json(`Error: ${error}`);
  }
}

export async function listarNoticias(_, res: Response) {
  try {
    const noticias = await getNoticias();
    return res.json(noticias);
  } catch (error) {
    return res.json(`Error: ${error}`);
  }
}

export async function editarNoticia(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const { titulo, descricao } = req.body;

    const newValuenoticia = await putNoticia(id, titulo, descricao);

    if (newValuenoticia[0] === 1) {
      return res.json({ msg: "Notícia alterada com sucesso!" });
    } else {
      return res.json({
        msg: "Notícia não encontrada, operação não realizada!",
      });
    }
  } catch (error) {
    return res.json(`Erro ao realizar a requisição`);
  }
}

export async function excluirNoticia(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletarNoticia = await deleteNoticia(id);

    if (deletarNoticia) {
      return res.json({ msg: "Notícia deletada com sucesso!" });
    } else {
      return res.json({
        msg: "Notícia não encontrado, operação não realizada!",
      });
    }
  } catch (error) {
    return res.json("Error ao realizar a requisição.");
  }
}