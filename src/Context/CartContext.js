import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getCantidad = () => {
        let count = 0
        cart.forEach(prods => {
            count += prods.cantidad
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prods => prods.id === id )
    }

    const clearCart = () => {
        setCart ([])
    }

    const removeItem = (id) => {
        const products = cart.filter(id !== id)
        setCart(products)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getCantidad,
            isInCart,
            clearCart,
            removeItem
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContext