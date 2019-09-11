import React from 'react'

export default function Image(props) {

    const imgStyle={
        height: '20px'
    }

    return (
        <div className="img-container">
            <img src={props.img} style={imgStyle}/>
        </div>
    )
}
