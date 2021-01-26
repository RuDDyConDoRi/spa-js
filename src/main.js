import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { router } from "./main.router";

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});