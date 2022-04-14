import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({marca, precio, img, categoria}) => {
    
    return(
        <div className="itemCard">
                <img scr= {img} alt={categoria}/>
                <p>{marca}</p>
                <p>${precio}</p>
        </div>
    )
}

export default Item