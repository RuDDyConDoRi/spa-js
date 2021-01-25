import registro from "./registro.html";

export default () => {
    const divElelemnt = document.createElement('div');
    divElelemnt.innerHTML = registro;

    return divElelemnt;
}