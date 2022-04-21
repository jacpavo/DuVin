import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, marca, precio, img, categoria}) => {
    
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click item')
    }
    
    return(
        <article className="itemCard" onClikc={handleClick}>
            <header>
                <p>{marca}</p>
            </header>
            <picture>
                <img scr= {img} alt={categoria}/>
            </picture>
            <section>
                <p>${precio}</p>
            </section>
            <footer>
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item