import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home'


const routes = [
    {
        path:'/',
        name:'Trabalhe Conosco',
        component:Home
    }
]

const history = createWebHistory();
const router = createRouter({
    history,
    routes
})



export default router