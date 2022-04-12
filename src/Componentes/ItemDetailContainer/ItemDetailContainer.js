import { useState, useEffect } from 'react'
import ItemDetail from 'react'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState ([])

    const getItem = () => {
        fetch('./products.js').then(response) => {
            return response.products()
        })
        .then(res => {
            setProducts(res.results)
        })
    }

return(
    <div>
        <ul>
            {products.map(products => {
                return(
                    <li key={products.id}>
                        <img src={products.img} alt={products.marca}/>
                        <p>{products.marca}</p>
                        <p>${products.precio}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default ItemDetailContainer

