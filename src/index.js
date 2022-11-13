import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode auxilia a detectar erros no console do navegador duplicando a renderização
  //Remover no ambiente de produção
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
