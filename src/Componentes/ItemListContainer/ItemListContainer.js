import {useState, useEffect } from 'react'
import {getProducts, getProdutcs} from '../mock/products'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, []) 

    

    return(
        <> 
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        </>
        )
    }
    
    export default ItemListContainer
    
    