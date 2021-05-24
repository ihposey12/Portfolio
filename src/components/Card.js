import React from 'react'
import CardInfo from './CardInfo'

const Card = (props) => {
    return(
        <div className='d-inline-block hp-card' onClick={() => props.click(props.item)}>
            <img className='hp-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} />}
        </div>
    )
}

export default Card