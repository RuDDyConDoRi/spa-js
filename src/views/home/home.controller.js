import home from "./home.html";
import './home.css';

export default () => {
    const divElelemnt = document.createElement('div');
    divElelemnt.classList = 'text-white';
    divElelemnt.innerHTML = home;

    const boton = divElelemnt.querySelector('#btnLlamar');
    boton.addEventListener('click', () => {
        alert('Selecciono!!!');
    });

    return divElelemnt;
}