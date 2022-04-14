import './NavBar.css'
import CartIcon from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategorias } from '../mock/products'


const NavBar = () => {
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
        getCategorias().then(categorias => {
            setCategorias(categorias)
        })
    }, [])

return ( 
    <nav className= "navbar">
        <Link to='/'>
            <img src="./img/logo.jpeg" className="navlogo" alt="DuVin" />
        <div className="nav">

            <div className="navitems"> 
                 <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to= "Vinos">Vinos</Link>
                    </li>
                    <li>
                        <Link to="/cervezas">Cervezas</Link>
                    </li>
                    <li>
                        <Link to="/espirituosas">Espirituosas</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <CartIcon className='carticon' /> 
                    </li>
                    <li>
                    <a> <input type="text" className="searchbox" placeholder="marca, producto" /> </a>
                    </li>
                </ul>
            </div>    
        </div>
        </Link>
    </nav>
    )
};

export default NavBar;