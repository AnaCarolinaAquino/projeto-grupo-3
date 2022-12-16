import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToEdit = () => {
  const { id, barra } = useParams();

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imgl, setImgl] = useState("");

  useEffect(() => {
    axios.get(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then((res) => {
      setNome(res.data.nome);
      setPreco(res.data.preco);
      setDescricao(res.data.descricao);
      setImgl(res.data.imgl);
    });
  }, [id,barra]);

  const data = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    imgl: imgl
  };

  function Atualizar(e) {
    e.preventDefault();
    if (nome.length === 0 || descricao.length === 0 || preco.length === 0 || imgl.length === 0) {
      alert("Existe algum campo em branco")
    } else if (descricao.length > 100) {
      alert("Sua descrição atingiu o número máximo de 120 caracteres permitidos")
    } else {
      axios.put(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`, data).then(navigate("/Get").catch((error) => {
        console.error('Error:', error);
      }));
    }
  }
  const navigate = useNavigate();

  return (<div className="editar-responsivo">
    <div className="itemheader">
      <header>
        <h1 className="tamanholetraeditar">Atualizar Produto da lista {barra}</h1>
      </header>
    </div>
    <main className="dadostextoeditar">
      <form className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Nome:</label>
          <input className="form-control"
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Preço:</label>
          <input className="form-control"
            value={preco}
            type="text"
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Descrição:</label>
          <textarea className="form-control"
            value={descricao}
            type="text"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Url da Imagem:</label>
          <textarea className="form-control"
            value={imgl}
            type="text"
            onChange={(e) => setImgl(e.target.value)}
          />
        </div>
        <br></br>
        <div className="caixadebotoes">
          <Link to={`/hoteis`} ><button className="estilobotaobrilho tbe">Voltar</button></Link>
          <button className="bt2 estilobotaobrilho tbe" type="submit"
            onClick={Atualizar}
          >Atualizar Dados</button>
        </div>
      </form>
    </main>
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted"> &copy; 2022 DuplaDeDois, Inc</p>

          <p
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <p  class="nav-link px-2 text-muted">
                Home
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">
                Lista de Produtos
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Adicionar Novos Itens</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Planos</p>
            </li>
          </ul>
        </footer>
      </div>
  </div>);
};
export default ToEdit;