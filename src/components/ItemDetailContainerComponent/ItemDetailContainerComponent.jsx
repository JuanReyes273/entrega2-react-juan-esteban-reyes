import "./itemDetailContainer.css";
import { useState, useEffect } from "react";
import { getPeliculaData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [pelicula, setPelicula] = useState({})
    const { peliculaId } = useParams();

    async function requestPelicula() {
        const respuesta = await getPeliculaData(peliculaId);
        setPelicula(respuesta)
    }

    useEffect(() => {
        requestPelicula()
    },[peliculaId]);

    return (
        <div class="pelicula-card">
            <img src={pelicula.img}></img>
            <h2>{pelicula.nombre}</h2>
            <p>{pelicula.descripcion}</p>
            <div class="precio-container">
                <button class="btn-cantidad">-</button>
                <span class="cantidad">1</span>
                <button class="btn-cantidad">+</button>
            </div>
            <span class="precio">{pelicula.precio}</span>
            <button class="btn-add">Añadir a carrito</button>
        </div>
    );
}

export default ItemDetailContainer;



