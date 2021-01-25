import notFound from "./404.html";

export default () => {
    const divElelemnt = document.createElement('div');
    divElelemnt.innerHTML = notFound;

    return divElelemnt;
}