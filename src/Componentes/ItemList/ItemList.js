
import Item from '../Item/Item'


const ItemList = ({products}) => {
    
    return(
        <div onClikc={() => console.log('Click en el Itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod}/> )}
        </div>
        )    

    }


export default ItemList