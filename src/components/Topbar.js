import React from 'react'

export default function Topbar(props) {
    const topbarStyle ={
        display: 'flex',
        color: '#ffffff'
    }
    const liStyle = {
        marginRight: '10px'
    }
        
        return (
            <div>
                <ul style={topbarStyle}>
                    <li style={liStyle}>Pokemon Clicky Game</li>
                    <li style={liStyle}>Score: {props.score}</li>
                    <li style={liStyle}> Top Score: {props.topscore}</li>
                </ul>
            </div>
        )
    
}
