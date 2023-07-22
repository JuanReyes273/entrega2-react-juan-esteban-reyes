import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import CartWidgetComponent from './components/CartWidgetComponent/CartWidgetComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
import ItemDetailContainer from './components/ItemDetailContainerComponent/ItemDetailContainerComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav class="navbar">
          <NavBarComponent/>
          <CartWidgetComponent/>
        </nav>
        <Routes>
          <Route path="/" element={<ItemListContainerComponent/>}/>
          <Route path="/genero/:generoId" element={<ItemListContainerComponent/>}/>
          <Route path="/pelicula/:peliculaId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
