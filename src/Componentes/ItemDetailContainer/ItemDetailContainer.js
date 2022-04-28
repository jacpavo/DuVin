import { useState, useEffect } from 'react'
import { getProductsById } from '../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase/index'
import { getDocs, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [products, setProducts] = useState ()
    const [cargando, setcargando] = useState (false)
    
    const { productsId } = useParams()

    useEffect(() => {
      //getProductsById(categoriasId).then(prods => {
        //  setProducts(prods)
      //}).catch(err => {
        //  console.log(err)
      //}).finally(() => {
        //  setcargando(false)
      //})
      
      getDoc(doc(firestoreDb, 'products', productsId)).then(response => {
          console.log(response)
          const product = { id: response.id, ...response.data()}
      })

      return (() => {
          setProducts()
      })

    }, [productsId])

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

