import './App.css';
import NavBar from '../src/Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {useState} from 'react'
import ItemCounter from './Componentes/ItemCounter/ItemCounter'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting='Un vinito a tu salud!!'/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
