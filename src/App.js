import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
// import axios from "axios";

function App() {
  // Definir Categoria y noticias desde el Submit

  const [categoria, guardarCategoria] = useState("");

  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=a4bf569189fa4617bb27cc8901a25e7d`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <h1>
          <Formulario guardarCategoria={guardarCategoria} />
        </h1>
      </div>
    </Fragment>
  );
}

export default App;
