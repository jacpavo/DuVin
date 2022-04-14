import './App.css';
import NavBar from '../src/Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {

  const handleOnAdd = (cantidad) =>{
    console.log(`se agregaron ${cantidad} productos`)
  }
  

  return (
    <div className="App">
    <BrowserRouter>
     <NavBar />
     <Routes>

     <Route path='/Vinos' element={<ItemListContainer />} />
     <Route path='/Cervezas' element={<ItemListContainer />} />
     <Route path='/Espirituosas' element={<ItemDetailContainer />} />

     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
