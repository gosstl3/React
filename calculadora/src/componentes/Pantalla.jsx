import React from "react";
import '../hojas-de-estilo/Pantalla.css';

//Manera alternativa de definir un componente funcional (como una funcion flecha)
const Pantalla = ({ input }) => ( //sintaxis de desesctructuracion
  <div className='input'>
    {input}
  </div>
);

export default Pantalla; 