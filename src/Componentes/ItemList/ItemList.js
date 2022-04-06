import {useState, useEffect} from 'react'
import getBev from '../Item/Item.js'

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect (()=>{
        getBev().then(bevs => setProducts(bevs)).catch(error=>console.log(error));
    }, [])

    useEffect (()=>{
        console.log(products);
    },[products])
    return(
        <div>
            {products.map((products)=><div>
                <p>{products.Bodega}</p>
                <p>{products.Variedad}</p>
                <p>{products.Precio}</p>
                <p>{products.País}</p>
                <p>{products.img}</p>
            </div>)}
        </div>
    )
}


export default ItemList