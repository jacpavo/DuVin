import React from 'react'
import { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi'
import CartContext from '../../Context/CartContext'

const CartIcon = () => {

    const { getCantidad } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'>
            <HiShoppingCart/>
            { getCantidad() }
        </Link>
    );
}

export default CartIcon