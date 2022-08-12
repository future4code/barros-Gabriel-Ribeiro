function Card(name,description,planet,duration,date) {
    return (
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Planeta:{planet}</p>
        <p>Duração:{duration}</p>
        <p>Data:{date}</p>
      </div>
    );
  }
  
  export default Card;