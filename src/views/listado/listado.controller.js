import listado from "./listado.html";
import './listado.css';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async() => {
    const divElelemnt = document.createElement('div');
    divElelemnt.innerHTML = listado;

    const postsElement = divElelemnt.querySelector('#posts');
    const totalElement = divElelemnt.querySelector('#total');

    const posts = await getPosts();
    posts.forEach(post => {
        postsElement.innerHTML += `
            <div class="frame">
                <div class="heading">${post.title}</div>
                <div class="content">
                    <div class="p-2">
                        ${post.body}    
                    </div>
                </div>
            </div>
        `
    });

    totalElement.innerHTML = posts.length;

    return divElelemnt;
}