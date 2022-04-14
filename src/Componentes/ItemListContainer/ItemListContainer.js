import {useState, useEffect } from 'react'
import {getProducts, getProdutcs} from '../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        getProducts(categoriaId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoriaId]) 

    

    return(
        <> 
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        </>
        )
    }
    
    export default ItemListContainer
    
    