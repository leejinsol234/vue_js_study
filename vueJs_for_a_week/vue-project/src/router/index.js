import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: () => import(/* webpackChunkName: "databinding" */ '../views/01_DataBinding.vue'),
    },
    {
        path: '/databindinghtml',
        name: 'DataBindingHtml',
        component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/02_DataBindingHtml.vue'),
    },
    {
        path: '/databindinginputtext',
        name: 'DataBindingInputText',
        component: () => import(/* webpackChunkName: "databindinginputtext" */ '../views/03_DataBindingInputText.vue'),
    },
    {
        path: '/databindinginputnumber',
        name: 'DataBindingInputNumber',
        component: () =>
            import(/* webpackChunkName: "databindinginputnumber" */ '../views/04_DataBindingInputNumber.vue'),
    },
    {
        path: '/databindingtextarea',
        name: 'DataBindingTextarea',
        component: () => import(/* webpackChunkName: "databindingtextarea" */ '../views/05_DataBindingTextarea.vue'),
    },
    {
        path: '/databindingselect',
        name: 'DataBindingSelect',
        component: () => import(/* webpackChunkName: "databindingtextarea" */ '../views/06_DataBindingSelect.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
