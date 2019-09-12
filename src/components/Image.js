import React from 'react'

export default function Image(props) {

    const imgStyle={
        height: '40px'
    }

    return (
        <div className="img-container" >
            <img src={props.img} style={imgStyle} onClick={props.handleClicked} id={props.id}/>
        </div>
    )
}
