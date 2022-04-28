import './NavBar.css'
import CartIcon from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategorias } from '../mock/products'
import { firestoreDb } from '../../services/firebase/index'
import { getDocs, collection } from 'firebase/firestore'


const NavBar = () => {
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
        //getCategorias().then(categorias => {
        //    setCategorias(categorias)
        //})

        getDocs(collection(firestoreDb, 'categorias')).then(response => {
            const categorias = response.docs.map(doc => {
                return { id: doc.id, ...doc.data}
            })
            setCategorias(categorias)
        })
    }, [])

return ( 
    <nav className= "navbar">
        <Link to='/'>
            <img src="./img/logo.jpeg" className="navlogo" alt="DuVin" />
        </Link>
        <div className="nav">
            <div className="navitems"> 
                { categorias.map(cat => <NavLink key={cat.id} to={`/categorias/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.description}</NavLink> )}
            </div>    
        </div>
        <CartIcon className='carticon' /> 
    </nav>
    )
};

export default NavBar;