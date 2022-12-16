import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Loading from "./../Loading/Loading"
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Hotels = () => {
    const [dados, setDados] = useState([]);
    const [barra, setBarra] = useState('');
    const [loading, setLoading] = useState(true);
    const [removerLoading, setRemoverLoading] = useState(false)
  
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };
  
      loadData();
    }, [])
  
    let Url = `https://projeto-json-server-nine.vercel.app/` + barra;
    function Cdados() {
      setRemoverLoading(true)
      setTimeout(() => {
        axios.get(Url).then((res) => {
          setDados(res.data);
          setRemoverLoading(false)
        }).catch((error) => {
          console.error('Error:', error);
        });
      }, 2000)
    }
    if (loading) {
      return <div className="caixagrid"><div className="elemento"><Loading /></div></div>
    }
    else {
      return (<>
        <motion.div className="container-grid"
          initial={{translateX: 0}}
          animate={{translateX: 0}}
          exit={{translateX: -3000, x: 100}}
          transition={{delay: 1}}
        >
          <header className="itemheader">
            <h1>Consulte aqui o melhor hotel do mundo</h1>
          </header>
          <br></br>
          <main>
            <div className="containerprincipal">
              <aside className="caixaver1 anv3">
                <h4>Destaques</h4>
                <img width="210px" className="imagemdestaque1" src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg" alt="abc"/>
                <p className="fontcolor"> Deluxe espetacular</p>
                <img width="210px" className="imagemdestaque2" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="abc"/>
                <p className="fontcolor">Executivo elegante</p>
              </aside>
              <article className="caixaver2">
                <h3 className="elementocaixatitulo anv1">Pesquisar Quartos</h3>
           
                <select className="form-select selectmode anv2" onChange={(e) => { const selecao = e.target.value; setBarra(selecao) }}>
                  <option value="Erro">---------</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Executivo">Executivo</option>
                  <option value="Standard">Standard</option>
                </select>
                <br></br>
                <button className="estilobotaobrilho anv3 elementobotaotitulo" onClick={Cdados}>Buscar</button>
              </article>
              <div className="caixaver3">
                <div className="caixagridcarregar">
                  <div className="elemento">{removerLoading && <Loading />}</div>
                </div>
                <div className="caixadedados">
                  {dados.map((data) => {
                    return <div key={data.id}>
                      <div>
                        <div className="dadosbuscados">
                          <img className="tamanhoimagemcaixa" src={data.imgl} alt="imagenspegadas" />
                        </div>
                        <div className="dadosbuscados">
                          <ul className="fontdados">
                            <li>{data.nome}</li>
                            <li>{data.descricao}</li>
                            <li>{data.preco}</li>
                          </ul>
                        </div>
                        <div className="dadosbuscados tamanhocaixa">
                          <Link to={`/Editar/${barra}/${data.id}`}><button className="coresbtn">Editar</button></Link>
                        </div>
                        <div className="dadosbuscados tamanhocaixa">
                          <Link to={`/Deletar/${barra}/${data.id}`}><button className="coresbtn">Deletar</button></Link>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </main>
          <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-muted"> &copy; 2022 DupladeDois, Inc</p>
  
            <p
              href="/"
              class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            ></p>

          </footer>
        </div>
        </motion.div>
  
      </>)
    }
  };
  export default Hotels;