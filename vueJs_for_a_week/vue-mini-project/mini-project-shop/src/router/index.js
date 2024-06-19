import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import ProductCreate from '../views/ProductCreate';
import ProductUpdate from '../views/ProductUpdate';
import ImageInsert from '../views/ImageInsert';
import SalesList from '../views/SalesList';

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProductList,
    },
    {
        path: '/detail',
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/create',
        name: 'ProductCreate',
        component: ProductCreate,
    },
    {
        path: '/update',
        name: 'ProductUpdate',
        component: ProductUpdate,
    },
    {
        path: '/sales',
        name: 'SalesList',
        component: SalesList,
    },
    {
        path: '/image_insert',
        name: 'ImageInsert',
        component: ImageInsert,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
