import '../Item/Item.css'

const Item = ({marca, precio, img, origen}) => {
    return(
        <div className="itemCard">
            <img scr= {img} alt={marca}/>
                <p>{marca}</p>
                <p>{precio}</p>
                <p>{origen}</p>
        </div>
    )
}

export default Item