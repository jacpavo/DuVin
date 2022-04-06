import React, {useState} from 'react'
import ContadorDos from '../ItemCounter/Contador.js'
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = (props) => {
   
    const [count, setCount] = useState(1);
    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count - 1);
        }
        if(condition === '+'){
            setCount(count + 1);
        }
    }
    const stock = 5;
    const initial = 1;

    return(
        <> 
        <h1>{props.greeting}</h1>
        <ItemList/>
        <ContadorDos onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </>
        )
}

export default ItemListContainer