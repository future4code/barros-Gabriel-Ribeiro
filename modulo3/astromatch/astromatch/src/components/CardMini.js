

function CardMini (props) {

    const {photo, name, age } = props

    return (
        <div>
            <img src={photo} alt=""/>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )

}

export default CardMini;