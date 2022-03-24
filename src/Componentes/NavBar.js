import './NavBar.css'



const NavBar = () => {
    return <nav className= "navbar">
        <div className="nav">
        <img src="https://www.canva.com/design/DAE1jLdqSkw/view" className="navlogo" alt="DuVin" />
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
                </ul> 
            </div>
        </div>

    </nav>
};

//<input type="text" className="searchbox" placeholder="marca, producto" />

export default NavBar;