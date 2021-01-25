import Home from './views/home/home.controller';
import Registro from './views/registro/registro.controller';
import Listado from './views/listado/listado.controller';
import NotFound from './views/404/404.controller';

const controllers = {
    home: Home,
    registro: Registro,
    listado: Listado,
    notFound: NotFound
};

export { controllers };
