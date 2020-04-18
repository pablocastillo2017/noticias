import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  // Definir Categoria y noticias desde el Submit

  const [categoria, guardarCategoria] = useState("");

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
