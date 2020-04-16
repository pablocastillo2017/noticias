import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  //State Del Custom HOOK
  const [state, actualizarState] = useState("");

  const SelectNoticias = () => (
    <select className="browser-default">
      <opcion value="">Seleccione</opcion>
    </select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
