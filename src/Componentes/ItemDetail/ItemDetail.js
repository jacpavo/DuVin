import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import CartContext from '../../Context/CartContext'
import { useNotification} from '../../Notification/Notification'



const ItemDetail = ({id, marca, variedad, precio, origen, img, categoria, stock }) => {
    
   const {addItem, isInCart } = useContext(CartContext)

   const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const productsObj = {
            id, marca, precio, cantidad: count
        }
    
        addItem(productsObj)
        setNotification('error', `Se agregaron ${count} ${marca} correctamente`)
    }



    return (
        <section>
            <header>
                <h2>
                    {marca}
                </h2>
            </header>
            <picture>
                <img src={img} alt={marca}/>
            </picture>
            <div>
                <p key= {id}></p>
                <p>Variedad: {variedad}</p>
                <p>Precio: {precio}</p>
                <p>Origen: {origen}</p>
                <p>Categoria: {categoria}</p>
            </div>
            <footer>
                {
                    isInCart(id) 
                        ? <Link to= '/cart' className='Option'>Ir al carrito</Link> 
                        : <ItemCounter onAdd={handleAdd} stock={stock}/> }
            </footer>
        
        </section>
    
    )
    
}

export default ItemDetail