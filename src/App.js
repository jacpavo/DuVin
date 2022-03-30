import './App.css';
import NavBar from '../src/Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting='Un vinito a tu salud!!'/>
    </div>
  );
}

export default App;
