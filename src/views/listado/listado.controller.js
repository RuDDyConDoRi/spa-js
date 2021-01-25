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
            <li>
                <h5>
                    ${post.title}
                </h5>
                <p>
                    ${post.body}
                </p>
            </li>
        `
    });

    totalElement.innerHTML = posts.length;

    return divElelemnt;
}