import React, {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter.js'
import ContadorDos from '../ItemCounter/Contador.js'

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
        <ItemCounter/>
        <ContadorDos onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </>
        )
}

export default ItemListContainer