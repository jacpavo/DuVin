import {useState, useEffect } from 'react'
import {getProducts} from '../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()

    const { categoriaId } = useParams()

    useEffect(() => {
        getProducts(categoriaId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoriaId]) 

   useEffect(() => {
       setTimeout(() => {
           setTitle('Productos')
       }, 4000)
   })
    

    return(
        <div className='ItemListContainer'> 
        <h1>{title}</h1>
        <ItemList products={products} />
        </div>
        )
    }
    
    export default ItemListContainer
    
    