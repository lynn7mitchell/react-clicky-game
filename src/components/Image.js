import React from 'react'

export default function Image(props) {

    const imgStyle={
        height: '25vh',
        margin: 0,
        padding: 0
    }

    return (
            <img src={props.img} style={imgStyle} onClick={props.handleClicked} id={props.id}/>
    )
}
