import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({marca, precio, img, categoria}) => {
    
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click item')
    }
    
    return(
        <div className="itemCard" onClikc={handleClick}>
                <img scr= {img} alt={categoria}/>
                <p>{marca}</p>
                <p>${precio}</p>
        </div>
    )
}

export default Item