import React, { useState } from 'react'

function Hooks() {
    const [data,setData] = useState('data-content');
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Hooks;