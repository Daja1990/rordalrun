import Forside from '../Pages/Forside/Forside';
import Tilmelding from '../Pages/Tilmelding/Tilmelding';
import Rordalrun from '../Pages/Rordalrun/Rordalrun';
import Login from '../Pages/Login/Login';
import Distancer from '../Pages/Distancer/Distancer';

const routes = [
    {
        name: 'Forside',
        path: '/',
        exact: true,
        component: Forside
    },
    {
        name: 'Om Rørdal Run',
        path: '/rordalrun',
        exact: true,
        component: Rordalrun
    },
    {
        name: 'Tilmelding',
        path: '/Tilmelding',
        exact: true,
        component: Tilmelding
    },
    {
        name: 'Distancer',
        path: '/Distancer',
        exact: true,
        component: Distancer
    },
    {
        name: 'Login',
        path: '/Login',
        exact: true,
        component: Login
    }
];

export default routes;