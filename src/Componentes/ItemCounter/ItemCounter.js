import { useState } from 'react'
import './ItemCounter.css'


const ItemCounter = ({initial = 1, stock = 0, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)


    const menos = () => {
        if(cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    const mas = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }



    return(
        <div className = 'contador'>
            <button onClick={menos} >-</button>
            <p>{cantidad}</p>
            <button onClick={mas} >+</button>
            <button onClick={() => onAdd(cantidad)} className= "pluscarrito">Agregar a Carrito</button>
        </div>
    )
}



export default ItemCounter