import { controllers } from "./componentes";

const content = document.getElementById('root');
const router = async (route) => {
    content.innerHTML = '';

    switch (route) {
        case '#/':
            return content.appendChild(controllers.home());           
        case '#/registro':
            return content.appendChild(controllers.registro());
        case '#/listado':
            return content.appendChild(await controllers.listado());
        default:
            return content.appendChild(controllers.notFound());
    }
}

export { router };