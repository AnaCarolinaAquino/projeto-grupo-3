import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Create = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imgl, setImgl] = useState("");

  const navigate = useNavigate();
  const [barra, setBarra] = useState("");
  let Url = `https://projeto-json-server-nine.vercel.app/` + barra;

  const data = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    imgl: imgl,
  };

  function submitForm(e) {
    e.preventDefault();
    if (
      nome.length === 0 ||
      descricao.length === 0 ||
      preco.length === 0 ||
      imgl.length === 0
    ) {
      alert("Existe algum campo em branco");
    } else if (descricao.length > 100) {
      alert(
        "Sua descrição atingiu o número máximo de 120 caracteres permitidos"
      );
    } else {
      axios.post(Url, data).then(
        navigate("/hoteis").catch((error) => {
          console.error("Error:", error);
        })
      );
    }
  }

  return (
    <motion.div
      className="criar-responsivo"
      initial={{ translateX: 0 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: -3000, x: 100 }}
      transition={{ delay: 1 }}
    >
      <div className="itemheader">
        <header>
          <h1 className="tamanholetracriar">Adicionar um novo quarto</h1>
        </header>
      </div>
      <main>
        <div className="subtitulo">
          <h2 className="tamanholetracriar">Selecione o tipo de quarto</h2>
        </div>
        <div className="seleção">
          <select
            className="form-select"
            onChange={(e) => {
              const selecao = e.target.value;
              setBarra(selecao);
            }}
          >
            <option value="">Selecione</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Executivo">Executivo</option>
            <option value="Standard">Standard</option>
          </select>
        </div>
        <div className="boxcriardados">
          <div className="dadostitulo">
            <h2 className="tamanholetracriar">
              Agora informe as especificações do novo produto
            </h2>
          </div>
          <div className="dadostexto">
            <form className="row g-3 caixadel3">
              <div className="col-md-4">
                <label className="form-label">Nome:</label>
                <input
                  className="form-control"
                  value={nome}
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Preço:</label>
                <input
                  className="form-control"
                  value={preco}
                  type="text"
                  onChange={(e) => setPreco(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Descrição:</label>
                <textarea
                  className="form-control"
                  value={descricao}
                  type="text"
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Url da Imagem:</label>
                <textarea
                  className="form-control"
                  value={imgl}
                  type="text"
                  onChange={(e) => setImgl(e.target.value)}
                />
              </div>
              <br></br>
              <div className="caixadebotoes">
                <Link to={`/hoteis`}>
                  <button className="estilobotaobrilho tb">Voltar</button>
                </Link>
                <button
                  className="bt2 estilobotaobrilho tb"
                  type="submit"
                  onClick={submitForm}
                >
                  Adicionar a lista
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted"> &copy; 2022 DuplaDeDois, Inc</p>

          <p
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></p>

        </footer>
      </div>
    </motion.div>
  );
};

export default Create;
