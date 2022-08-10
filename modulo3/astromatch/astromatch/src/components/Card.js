
function Card (props) {

    const {photo, name, age, bio} = props

    return (
        <div>
            <img src={photo} alt=""/>
                <div>
                    <h2>{name}</h2>
                    <p>{age}</p>
                </div>
            <p>{bio}</p>
        </div>
    )

}

export default Card;