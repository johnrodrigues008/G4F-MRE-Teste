"use client";

import React, { useState } from "react";

import "./Page.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Page() {
  const cepNumber = 71928360;

  const [data, setData] = useState({});
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

  const fetchAddress = (cep: string | any[]) => {
    if (cep.length === 8) {
      fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLogradouro(data.logradouro);
          setComplemento(data.complemento);
          setBairro(data.bairro);
          setLocalidade(data.localidade);
          setUf(data.uf);
        });
    }
  };

  const handleCepBlur = (e: { target: { value: any } }) => {
    const cepValue = e.target.value;
    setCep(cepValue);
    fetchAddress(cepValue);
  };

  return (
    <>
      <div>
        <Header />
        <div className="endereco">
          <h2>Buscar endereço viaCep</h2>
          <form className="endereco-form">
            <div className="d-flex">
              <div className="mr-3">
                <label htmlFor="cep">CEP: </label>

                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={handleCepBlur}
                  maxLength={8}
                  placeholder="00.000-000"
                  required
                />
              </div>
              <div>
                <label htmlFor="logradouro">Logradouro: </label>
                <input
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="bairro">Bairro: </label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className="d-flex">
              <div className="mr-3">
                <label htmlFor="localidade">Localidade: </label>
                <input
                  type="text"
                  id="localidade"
                  name="localidade"
                  value={localidade}
                  onChange={(e) => setLocalidade(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="uf">UF: </label>
                <input
                  type="text"
                  id="uf"
                  name="uf"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="complemento">Complemento: </label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
            <div className="btn-form">
              <button type="submit">Salvar endereço</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
