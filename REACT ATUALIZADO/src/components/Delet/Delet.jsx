import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {motion} from 'framer-motion'

const Delet = () => {
  const { barra,id } = useParams();
  const [dados, setDados] = useState([]);  
  useEffect(() => {
    axios.get(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then((res) => {
      setDados(res.data).catch((error) => {
        console.error('Error:', error);
      })
    });
  }, [barra,id]);

  const navigate = useNavigate();

  function deletar() {
    axios.delete(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then(navigate("/hoteis").catch((error) => {
      console.error('Error:', error)
    }));
  }

  return(<motion.div className="delete-responsivo"
  initial={{translateX: 0}}
  animate={{translateX: 0}}
  exit={{translateX: -3000, x: 100}}
  transition={{delay: 1}}
  >
    <div className="itemheader">
      <header>
        <h1>Remover</h1>
      </header>
    </div>
    <main>
      <div className="caixadedadosdel">
        {dados && (
          <div className="caixadadosdel">
            <div>
              <h2 className="layoutitemd">
                Nome: {dados.nome}
              </h2>
              <h2 className="layoutitemd">
                Preço: {dados.preco}
              </h2>
              <h2 className="layoutitemd">
                Descrição: {dados.descricao}
              </h2>
              <h2 className="layoutitemd">
                Foto :{dados.imgl}
              </h2>
            </div>
          </div>)}
      </div>
      <div className="caixadebotoes">
        <Link to={`/hoteis`} ><button className="estilobotaobrilho tb">Manter o desejo</button></Link>
        <button className="bt2 estilobotaobrilho tb" onClick={()=>deletar()}>Remover</button>
      </div>
    </main>
  </motion.div>);
};
  
export default Delet;