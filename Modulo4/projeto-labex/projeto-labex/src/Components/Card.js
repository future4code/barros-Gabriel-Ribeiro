import styled from "styled-components";

const CardStyle = styled.section`
background-color: white;

`

function Card ({id,name,description,planet,duration,date}) {
  
  return (
   <CardStyle>
    <h4>{name}</h4>
    <p>{description}</p>
    <p>Planeta:{planet}</p>
    <p>Duração:{duration}</p>
    <p>Data:{date}</p>
  </CardStyle>
    );
  }
  
  export default Card;