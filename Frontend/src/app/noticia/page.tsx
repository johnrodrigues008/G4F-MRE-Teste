"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";

interface Noticia {
  id: number;
  titulo: string;
  descricao: string;
}

function LimitedText(props: { text: string; limit: number }) {
  const { text, limit } = props;
  let limitedText = text.slice(0, limit);

  if (
    text.length > limit ||
    (text.length === limit && text[limit - 1] === " ")
  ) {
    limitedText = limitedText.trim() + "...";
  }

  return <div>{limitedText}</div>;
}

export default function Page() {
  const [data, setData] = useState<Noticia[]>([]);

  const [ModalAdicionarNoticiaOpen, setModalAdicionarNoticiaOpen] =
    useState<boolean>(false);
  const [ModalEditarNoticiaOpen, setModalEditarNoticiaOpen] =
    useState<boolean>(false);
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

  const fetchNoticias = () => {
    axios
      .get("http://localhost:4000/noticia")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const toggleModal = () => {
    setModalAdicionarNoticiaOpen(!ModalAdicionarNoticiaOpen);
  };

  const toggleModalEdit = (noticia?: Noticia) => {
    setSelectedNoticia(noticia || null);
    setModalEditarNoticiaOpen(!ModalEditarNoticiaOpen);
  };

  const [values, setValues] = useState({
    titulo: "",
    descricao: "",
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/noticia", values)
      .then(() => {
        fetchNoticias()
        toggleModal()
      })
      .catch((error) => console.log(error));
  };

  const handleEditSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (selectedNoticia) {
      axios
        .put(`http://localhost:4000/noticia/${selectedNoticia.id}`, values)
        .then(() => {
          fetchNoticias()
          toggleModalEdit()
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:4000/noticia/${id}`)
      .then(() => fetchNoticias())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="noticia">
        <h2 className="noticia-title">Gerenciamento de Notícias</h2>

        <div className="noticia-container">
          <button onClick={toggleModal} className="noticia-container-add">
            Adicionar noticia
          </button>

          {data.length === 0 ? (
            <p className="sem-noticia">Nenhuma notícia cadastrada.</p>
          ) : (
            <table className="noticia-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descrição</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>
                      <LimitedText text={d.titulo} limit={30} />
                    </td>

                    <td>
                      <LimitedText text={d.descricao} limit={60} />
                    </td>

                    <td className="noticia-table-buttons">
                      <button
                        onClick={() => toggleModalEdit(d)}
                        className="noticia-table-btn-edit"
                      >
                        Editar
                      </button>

                      <button onClick={() => handleDelete(d.id)}>
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {ModalAdicionarNoticiaOpen && (
        <div className="modal-add-noticia">
          <form onSubmit={handleSubmit} className="add-noticia-content">
            <span className="add-noticia-close" onClick={toggleModal}>
              &times;
            </span>
            <div className="add-noticia-body">
              <h2>Adicionar nova notícia</h2>
              <div className="add-noticia-campos">
                <label htmlFor="titulo">
                  <strong>Titulo:</strong>{" "}
                </label>

                <input
                  onChange={(e) =>
                    setValues({ ...values, titulo: e.target.value })
                  }
                  type="text"
                  id="titulo"
                  name="titulo"
                />
              </div>
              <div className="add-noticia-campos">
                <label htmlFor="descricao">
                  <strong>Descrição:</strong>{" "}
                </label>

                <input
                  onChange={(e) =>
                    setValues({ ...values, descricao: e.target.value })
                  }
                  type="text"
                  id="descricao"
                  name="descricao"
                />
              </div>
            </div>

            <div className="add-noticia-buttons">
              <span className="add-noticia-span" onClick={toggleModal}>
                Cancelar
              </span>
              <button>Salvar</button>
            </div>
          </form>
        </div>
      )}

      {ModalEditarNoticiaOpen && selectedNoticia && (
        <div className="modal-add-noticia">
          <form onSubmit={handleEditSubmit} className="add-noticia-content">
            <span
              className="add-noticia-close"
              onClick={() => toggleModalEdit()}
            >
              &times;
            </span>
            <div className="add-noticia-body">
              <h2>Editar notícia</h2>
              <div className="add-noticia-campos">
                <label htmlFor="titulo">
                  <strong>Titulo:</strong>{" "}
                </label>

                <input
                  value={values.titulo}
                  onChange={(e) =>
                    setValues({ ...values, titulo: e.target.value })
                  }
                  type="text"
                  id="titulo"
                  name="titulo"
                />
              </div>
              <div className="add-noticia-campos">
                <label htmlFor="descricao">
                  <strong>Descrição:</strong>{" "}
                </label>

                <input
                  value={values.descricao}
                  onChange={(e) =>
                    setValues({ ...values, descricao: e.target.value })
                  }
                  type="text"
                  id="descricao"
                  name="descricao"
                />
              </div>
            </div>

            <div className="add-noticia-buttons">
              <span
                className="add-noticia-span"
                onClick={() => toggleModalEdit()}
              >
                Cancelar
              </span>
              <button>Salvar</button>
            </div>
          </form> 
        </div>
      )}
    </>
  );
}
