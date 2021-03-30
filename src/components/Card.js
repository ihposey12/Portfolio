import React from 'react'
import CardInfo from '../components/CardInfo'

const Card = (props) => {
    return(
        <div>
            <img className='' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} />}
        </div>
    )
}

export default Card