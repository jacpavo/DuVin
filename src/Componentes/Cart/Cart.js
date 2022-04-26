import {useContext} from 'react'
import CartContext from '../../Context/CartContext'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <h1>No hay productos</h1>
        )
    }

    return(
        <>
        <h1>cart</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.marca}  cantidad: {prod.cantidad} precio uni: {prod.precio}  subtotal: {prod.cantidad * prod.precio} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        </>
    )
}

export default Cart