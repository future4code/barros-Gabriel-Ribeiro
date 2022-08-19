import { BASE_URL } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

function Card(id,name,description,planet,duration,date) {
  
  const navigate = useNavigate();

  const subscribe = () => {
      navigate("/viagens/inscricao")
  }  
  
  return (
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Planeta:{planet}</p>
        <p>Duração:{duration}</p>
        <p>Data:{date}</p>
        <button onClick={ subscribe }>Enviar</button>
      </div>
    );
  }
  
  export default Card;