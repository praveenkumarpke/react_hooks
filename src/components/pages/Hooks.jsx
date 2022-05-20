import React, { useState } from 'react'
import Next from './Next';

function Hooks(props) {
    const [data, setData] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "blue"
    });

    const result = data;

    const upDate = () => {
        setData(i => {
            return {
                ...i,
                brand: "Suzuki",
                model: "Breeza",
                year: '2021',
                color: 'red'
            }
        });
    }

    // const Res = () => {
    //     setData(res=>{
    //         return{...res, brand : 'hello'}
    //     });
    // }

    return (
        <>
            <div style={{ color: 'green' }}>
                <h1>I have a {data.brand} {data.model} car</h1>
                <h2>Manufacturing year is {data.year}</h2>
                <h3>color is {data.color}</h3>
                <button onClick={upDate} style={{
                    background: 'blue', color: '#fff',
                    border: 'none', borderRadius: '10px', padding: '10px'
                }}> Click me!</button>
            </div>
            <Next color={result} />
        </>
    )
}

export default Hooks;