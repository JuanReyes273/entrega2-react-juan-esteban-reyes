import "./itemListContainer.css";
import { useState, useEffect } from "react";
import getPeliculas, { getGeneroPelicula } from "../../services/asyncMock";
import PeliculaCardComponent from "../PeliculaCardComponent/PeliculaCardComponent";
import { useParams } from "react-router-dom";


function ItemListContainerComponent() {
  const [peliculas, setPeliculas] = useState([]);
  const { generoId } = useParams();

  async function requestPeliculas() {
    let respuesta = generoId
      ? await getGeneroPelicula(generoId)
      : await getPeliculas();
    setPeliculas(respuesta);
  }

  useEffect(() => {
    requestPeliculas();
  }, [generoId]);

  return (
    <div>
      <h1>Listado de Peliculas</h1>
      <div className="flex-container">
        {peliculas.map((pelicula) => (
          <PeliculaCardComponent key={pelicula.id} {...pelicula} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainerComponent;