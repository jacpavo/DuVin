import React from 'react'
import './ItemCounter.css'

function ItemCounter () {
    const [counter, setCounter] = React.useState(0);

    const clickSum = () => {
        if (counter < 5)
        setCounter(counter + 1)
    };

    const clickRes = () => {
        if (counter > 0)
        setCounter(counter - 1)
    };


    return (
        <div className = "contador">
            <h4>Agregar al Carrito</h4>
            <button onClick = {clickRes}>-</button>
            <span>{counter}</span>
            <button onClick = {clickSum}>+</button>
            <button className = "pluscarrito">Agregar Carrito</button>
        </div>
    )
}

export default ItemCounter