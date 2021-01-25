import listado from "./listado.html";
import './listado.css';

export default () => {
    const divElelemnt = document.createElement('div');
    divElelemnt.innerHTML = listado;

    return divElelemnt;
}