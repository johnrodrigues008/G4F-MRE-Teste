export default function Home() {
  return (
    <main className="main-principal">
      <div>
        <h1>Sejam bem vindos</h1>
        <p>
          Essa pagina inicial foi criada com o objetivo de redirecionar-los para
          as duas principais etapas do projeto.{" "}
        </p>
        <p>Sendo elas: </p>
        <div className="main-principal-buttons">
          <a className="viacep" href="/endereco">
            <button>
              formulário para busca de <br />
              endereços por CEP na API viacep
            </button>
          </a>

          <a href="/noticia">
            <button>
              CRUD RESTful API para a entidade <br /> Noticia Json-Server
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
