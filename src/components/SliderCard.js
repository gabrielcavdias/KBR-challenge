import React from 'react'

const SliderCard = props => {
    return (
        <div className={"sliderCard cardAnimar"}>
            <img src={props.img} alt={props.nome} />
            <div className="sliderCard__description">
                <h3>{props.nome}</h3>
                <p>{props.depoimento}</p>
            </div>
        </div>
    )
}

export default SliderCard
