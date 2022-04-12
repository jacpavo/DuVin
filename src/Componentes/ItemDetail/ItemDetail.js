
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemDetail = ({id, marca, variedad, precio, origen, img, categoria }) => {

    return (
        <section>
            <h2>
                {marca}
            </h2>
            <div>
                <img src={img} alt={marca}/>
                <p>Variedad: {variedad}</p>
                <p>Precio: {precio}</p>
                <p>Origen: {origen}</p>
                <p>Categoria: {categoria}</p>
                <ItemCounter/>
            </div>
        
        </section>
    
    )
    
}

export default ItemDetail