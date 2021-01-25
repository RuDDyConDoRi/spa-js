import './main.css';
import 'metro4/build/css/metro-all.min.css';

import { router } from "./main.router";

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});