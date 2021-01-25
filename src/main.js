import './main.css'
import { router } from "./main.router";

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});