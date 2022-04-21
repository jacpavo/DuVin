import { HiShoppingCart } from 'react-icons/hi';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext'

const CartIcon= () => {

    const { getCantidad } = useContext(CartContext)


    return (
        <div>
            <HiShoppingCart />
            { getCantidad() }
        </div>
            
        )
}
export default CartIcon