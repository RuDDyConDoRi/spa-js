import listado from "./listado.html";
import './listado.css';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async() => {
    const divElelemnt = document.createElement('div');
    divElelemnt.innerHTML = listado;

    // const postsElement = divElelemnt.querySelector('#posts');
    const acordion = divElelemnt.querySelector('#accordion');
    const totalElement = divElelemnt.querySelector('#total');

    const posts = await getPosts();
    posts.forEach(post => {
        acordion.innerHTML += `
        <div class="card">
            <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ${post.title}
                    </button>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                    ${post.body}
                </div>
            </div>
        </div>`
    });

    totalElement.innerHTML = posts.length;
    
    const collapsesElements = acordion.querySelectorAll('.card');

    collapsesElements.forEach(function(userItem) {
        const ele = userItem.querySelector(':scope .card-header [data-toggle="collapse"]');
        const pnl = userItem.querySelector(':scope .collapse');
        ele.addEventListener('click', (e) => {
            quitarclase(collapsesElements);
            pnl.classList.toggle('show');
        });
    });

    return divElelemnt;
}

function quitarclase(collapsesElements) {
    collapsesElements.forEach((userItem) => {
        userItem.children[1].classList.remove('show');
    });
}