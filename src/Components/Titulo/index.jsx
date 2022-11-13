//Importação da biblioteca necessária para estilização de componentes
//Também é necessário instalar a biblioteca antes de utilizá-la
import styled from "styled-components" 

/* ANTES
const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};
*/

//DEPOIS
//Componente composto por tag H1 contendo estilo CSS definido entre crase ` `
//O React cria classes estranhas e aleatórias para não haver conflito (ver inspetor de elementos)
const Titulo = styled.h1
`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`

export default Titulo
