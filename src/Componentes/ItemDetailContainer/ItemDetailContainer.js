import { useState, useEffect } from 'react'
import { getProducts } from '../mock/products'
import { getProductsById } from '../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [products, setProducts] = useState ()
    const [cargando, setcargando] = useState (true)
    
    const { categoriasId } = useParams()

    useEffect(() => {
      getProducts(categoriasId).then(prods => {
          setProducts(prods)
      }).catch(err => {
          console.log(err)
      }).finally(() => {
          setcargando(false)
      })
      

      return (() => {
          setProducts()
      })

    }, [getProductsById])

    return(
        <div>
            {
                cargando ?
                    <h4>Cargando...</h4> : 
                    products ?
                        <ItemDetail {...products}/> :
                        <h5>Producto fuera de stock</h5>
            }
        </div>
    )
}


/*return(
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
}*/

export default ItemDetailContainer

