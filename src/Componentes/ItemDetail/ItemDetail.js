import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const InputContador = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)
    const handleChange = (e) => {
        if(e.target.value <= stock){
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='numero' onCharge={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Agregar Carrito</button>
        </div>
    )
}

const BotonContador = ({ onConfirm, stock, initial = 0}) => {
    const [count, setCount] = useState(initial)

    const aumentar = () => {
        setCount(count + 1)
    }

    const disminuir = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={disminuir}>-</button>
            <button onClick={aumentar}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
        </div>
    )
}

const Select = ({options = [], onSelect}) => {
    return (
        <select onCharge={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
}

const ItemDetail = ({id, marca, variedad, precio, origen, img, categoria, stock }) => {
    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const option = [{id: 0, value: '', text: '-'}, {id: 1, value: '/', text: 'ItemListContainer'}]
    const navigate = useNavigate()

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }

    const handleSelect = (value) => {
        navigate(value)
    }

    const Count = typeInput ? BotonContador : InputContador


    return (
        <section>
            <h2>
                {marca}
            </h2>
            <div>
                <button onClick={() => setTypeInput(!typeInput)}>Cambiar count</button>
                <p key= {id}></p>
                <img src={img} alt={marca}/>
                <p>Variedad: {variedad}</p>
                <p>Precio: {precio}</p>
                <p>Origen: {origen}</p>
                <p>Categoria: {categoria}</p>
                <Select options={option} onSelect={handleSelect} />
                {quantity > 0 ? <Link to='/CartWidget'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/> }
            </div>
        
        </section>
    
    )
    
}

export default ItemDetail