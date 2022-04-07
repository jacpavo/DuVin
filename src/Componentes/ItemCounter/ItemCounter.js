import { useState, useEffect } from 'react'
import './ItemCounter.css'


const ItemCounter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        let activo = true

        setTimeout(()=>{
            if(activo) {
                setCount(0)
            }
        }, 4000)

        return (()=> {
            activo = false
        })
    }, [])

    useEffect(()=> {
    }, [count])

    const menos = () => {
        if(count > 0)
        setCount(count - 1)
    }

    const mas = () => {
        if(count < 5)
        setCount(count + 1)
    }



    return(
        <div className = 'contador'>
            <button onClick={menos} >-</button>
            <span>{count}</span>
            <button onClick={mas} >+</button>
            <button onClick={() => onAdd(count)} className= "pluscarrito">Agregar a Carrito</button>
        </div>
    )
}



export default ItemCounter