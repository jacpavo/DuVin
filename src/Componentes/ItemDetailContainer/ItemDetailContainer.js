import { useState, useEffect } from 'react'
import { getProductsById } from '../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [products, setProducts] = useState ()
    const [cargando, setcargando] = useState (true)
    
    const { categoriasId } = useParams()

    useEffect(() => {
      getProductsById(categoriasId).then(prods => {
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
    if(cargando) {
        return(
            <h4>Cargando...</h4>
        )
    }

    return(
        <div className='ItemDetailContainer'>
            { 
                    products ?
                        <ItemDetail {...products}/> :
                        <h5>Producto fuera de stock</h5>
            }
        </div>
    )
}



export default ItemDetailContainer

