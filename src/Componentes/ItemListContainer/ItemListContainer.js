import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getProducts} from '../mock/products'
import ItemCounter from '../ItemCounter/ItemCounter'



const ItemListContainer = (props) => {
   const [products, setProducts] = useState([])
   
   const [show, setShow] = useState(true)

    const manejoOnAdd = (cantidad) => {
        console.log(`Se agrego ${cantidad} al carrito`)
    }
   

    useEffect (()=>{
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error=> {
            console.log(error)
        });
    }, [])


    return(
        <> 
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        <button onClick={()=> setShow=(false)}>{show ? 'Ocultar' : 'Mostrar'}</button>
        {show ? <ItemCounter onAdd={manejoOnAdd} /> : null}
        </>
        )
    }
    
    export default ItemListContainer
    
    