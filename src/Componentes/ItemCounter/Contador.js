import './ItemCounter.css'



const ContadorDos = ({onAdd, stock, initial, count}) => { 
    
   

    return <div className = 'contador'>
        <button onClick={() => {if(count > initial) {onAdd('-')}}}>-</button>
        <span>{count}</span>
        <button onClick={() => {if(count < stock) {onAdd('+')}}}>+</button>
        <button className = "pluscarrito">Agregar Carrito</button>
    </div>

}

export default ContadorDos