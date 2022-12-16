import { Link } from "react-router-dom";
import error from './../../assets/images/error_404.jpg'


const NoPage = () => {
    return <div className="nopagelayout">
      <h1>Erro 404</h1>
      <h3> Página não Encontrada </h3>
      <div className="imgerror">
      <img src={error}/>
      </div>
      <p>Verifique Sua Url</p>
      <p>Verifique sua rede</p>
      <button><Link to={`/`}>Me tire daqui</Link></button>
    </div>;
  };

export default NoPage;
