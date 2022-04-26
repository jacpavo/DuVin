import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from '../src/Componentes/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'
import { NotificationProvider } from './Notification/Notification';

const App = () => {

  

  return (
<div className="App">
<NotificationProvider>
  <CartContextProvider>
    <BrowserRouter>
     <NavBar />
     <Routes>

     <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
     <Route path='/' element={<ItemListContainer />} />
     <Route path='/categorias/:categoriaId' element={<ItemListContainer />} />
     <Route path='/detail/:productsId' element={<ItemDetailContainer />} />
     <Route path='/cart' element={<Cart/>}/>

     </Routes>
    </BrowserRouter>
  </CartContextProvider>
 </NotificationProvider>     
</div>
  );
}

export default App;
