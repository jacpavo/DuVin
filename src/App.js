import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from '../src/Componentes/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'

const App = () => {

  

  return (
    <div className="App">
  <CartContextProvider>
    <BrowserRouter>
     <NavBar />
     <Routes>

     <Route path='/Vinos' element={<ItemListContainer />} />
     <Route path='/Cervezas' element={<ItemListContainer />} />
     <Route path='/Espirituosas' element={<ItemDetailContainer />} />

     </Routes>
    </BrowserRouter>
  </CartContextProvider>
    </div>
  );
}

export default App;
