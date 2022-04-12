import {useState, } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCounter from '../ItemCounter/ItemCounter'



const ItemListContainer = (props) => {
    const [products, setPtoducts] = useState([])

    const [show, setShow] = useState(true)

    const manejoOnAdd = (cantidad) => {
        console.log(`Se agrego ${cantidad} al carrito`)
    }

    

    return(
        <> 
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        {show ? <ItemCounter onAdd={manejoOnAdd} /> : null}
        </>
        )
    }
    
    export default ItemListContainer
    
    