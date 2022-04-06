import './NavBar.css'
import CartIcon from './CartWidget'


const NavBar = () => {
    return <nav className= "navbar">
        <div className="nav">
        <img src="./img/logo.jpeg" className="navlogo" alt="DuVin" />
            <div className="navitems"> 
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Vinos</a>
                    </li>
                    <li>
                        <a href="">Cervezas</a>
                    </li>
                    <li>
                        <a href="">Espirituosas</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                    <a> <CartIcon className='carticon'/> 0 </a>
                    </li>
                    <li>
                    <a> <input type="text" className="searchbox" placeholder="marca, producto" /> </a>
                    </li>
                </ul> 
            </div>
        </div>

    </nav>
};

export default NavBar;