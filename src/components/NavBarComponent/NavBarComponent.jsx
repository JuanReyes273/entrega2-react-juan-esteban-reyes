import "./navBar.css";
import { Link } from "react-router-dom";

function NavBarComponent() {
    return (
        <>
            <div class="navbar-brand">
                <Link to="/">MovieMania</Link>
            </div>
            <ul class="navbar-list">
                <li><Link to="/genero/animacion">Animación</Link></li>
                <li><Link to="/genero/accion">Acción</Link></li>
                <li><Link to="/genero/drama">Drama</Link></li>
                <li><Link to="/genero/fantasia">Fantasía</Link></li>
                <li><Link to="/genero/romance">Romance</Link></li>
            </ul>
        </>     
    );
}

export default NavBarComponent;