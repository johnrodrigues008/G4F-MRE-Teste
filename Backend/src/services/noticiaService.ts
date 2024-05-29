import { v4 } from "uuid";
import { NoticiasInterface } from "../interfaces/noticiaInterface";
import { noticiaModel } from "../models/noticiaModel";

export async function postNoticia(noticia: NoticiasInterface) {
  return await noticiaModel.create({
    id: v4(),
    titulo: noticia.titulo,
    descricao: noticia.descricao,
  });
}

export async function getNoticias() {
  return await noticiaModel.findAll();
}

export async function putNoticia(
  id: string,
  titulo: string,
  descricao: string
) {
  return await noticiaModel.update(
    {
      id: id,
      titulo: titulo,
      descricao: descricao,
    },
    { where: { id } }
  );
}

export async function deleteNoticia(id: string) {
  return await noticiaModel.destroy({ where: { id } });
}
