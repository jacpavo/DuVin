import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from '../src/Componentes/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

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
