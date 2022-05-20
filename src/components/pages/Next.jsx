import React from 'react'

function Next(props) {

    const brand = props.color.brand

    return (
        <div style={{ color: 'red' }}>
            <h1>Brand : {brand}</h1>
            <h1>Model : {props.color.model}</h1>
            <h1>Year : {props.color.year}</h1>
            <h1>Color : {props.color.color}</h1>
        </div>
    )
}

export default Next