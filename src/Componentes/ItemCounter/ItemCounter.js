import { useState, useEffect } from 'react'
import './ItemCounter.css'


const ItemCounter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)


    const menos = () => {
        setCount(count - 1)
    }

    const mas = () => {
        setCount(count + 1)
    }



    return(
        <div className = 'contador'>
            <button onClick={menos} >-</button>
            <p>{count}</p>
            <button onClick={mas} >+</button>
            <button onClick={() => onAdd(count)} className= "pluscarrito">Agregar a Carrito</button>
        </div>
    )
}



export default ItemCounter