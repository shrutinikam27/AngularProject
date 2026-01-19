import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Register } from './register/register';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'gallery', component: Gallery },
    { path: 'reg', component: Register },
    { path: 'log', component: Login },
];
