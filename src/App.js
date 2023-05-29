import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import React, {Component} from "react";

//faltan editar las rutas de los componentes
import Addlibros from "./components/add-libros.component";
import LibrosList from "./components/libros-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/libros" className="navbar-brand">
            Ximena 
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/libros"} className="nav-link">
                Libros
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>Books social media</h2>
          </div>
          <Routes>
            <Route path="/" element={<LibrosList />} />
            <Route path="add" element={<Addlibros />} />
            <Route path="/libros" element={<LibrosList />} />

          </Routes>
        
      </div>
    );
  }
}
export default App;
