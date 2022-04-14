import { useState, useEffect } from 'react'
import ItemDetail from 'react'
import { getProductsById} from '../mock/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (id) => {
    const [products, setProducts] = useState ()
    const [cargando, setCargando] = useState (true)

    const { productsId } = useParams()

    useEffect(() => {
      getProductsById(productsId).then(item => {
          setProducts(item)
      }).catch(err => {
          console.log(err)
      }).finally(() => {
          setCargando(false)
      })

      return (() => {
          setProducts()
      })

    }, [productsId])

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

