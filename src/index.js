// Esse arquivo é a ponte entre o componente criado no arquivo App.js e o navegador

import React, { StrictMode } from "react"; //Importa o React, necessário para usar JSX e criar componentes

import { createRoot } from "react-dom/client"; //Método usado para montar a aplicação React em uma árvore de elementos do DOM

import "./styles.css"; //Importa o arquivo de estilos CSS

import App from "./App"; //Importa o componente principal da aplicação

const root = createRoot(document.getElementById("root")); //Cria um "root" (raiz) React dentro do elemento HTML que tem o id="root"

root.render(

  <StrictMode>
    <App />
  </StrictMode>
  
);