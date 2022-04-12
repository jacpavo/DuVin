import '../Item/Item.css'

const Item = ({marca, precio, img, categoria}) => {
    return(
        <div className="itemCard">
                <img scr= {img} alt={categoria}/>
                <p>{marca}</p>
                <p>{precio}</p>
        </div>
    )
}

export default Item