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
        component: () => import(/* webpackChunkName: "databindingselect" */ '../views/06_DataBindingSelect.vue'),
    },
    {
        path: '/databindingcheckbox',
        name: 'DataBindingCheckbox',
        component: () => import(/* webpackChunkName: "databindingcheckbox" */ '../views/07_DataBindingCheckbox.vue'),
    },
    {
        path: '/databindingcheckbox2',
        name: 'DataBindingCheckbox2',
        component: () => import(/* webpackChunkName: "databindingcheckbox2" */ '../views/08_DataBindingCheckbox2.vue'),
    },
    {
        path: '/databindingradio',
        name: 'DataBindingRadio',
        component: () => import(/* webpackChunkName: "databindingradio" */ '../views/09_DataBindingRadio.vue'),
    },
    {
        path: '/databindingattribute',
        name: 'DataBindingAttribute',
        component: () => import(/* webpackChunkName: "databindingattribute" */ '../views/10_DataBindingAttribute.vue'),
    },
    {
        path: '/databindingbutton',
        name: 'DataBindingButton',
        component: () => import(/* webpackChunkName: "databindingbutton" */ '../views/11_DataBindingButton.vue'),
    },
    {
        path: '/databindingclass',
        name: 'DataBindingClass',
        component: () => import(/* webpackChunkName: "databindingclass" */ '../views/12_DataBindingClass.vue'),
    },
    {
        path: '/databindingclass2',
        name: 'DataBindingClass2',
        component: () => import(/* webpackChunkName: "databindingclass2" */ '../views/13_DataBindingClass2.vue'),
    },
    {
        path: '/databindingstyle',
        name: 'DataBindingStyle',
        component: () => import(/* webpackChunkName: "databindingstyle" */ '../views/14_DataBindingStyle.vue'),
    },
    {
        path: '/databindinglist',
        name: 'DataBindingList',
        component: () => import(/* webpackChunkName: "databindinglist" */ '../views/15_DataBindingList.vue'),
    },
    {
        path: '/renderingvif',
        name: 'RenderingVIf',
        component: () => import(/* webpackChunkName: "databindingrenderingvif" */ '../views/16_RenderingVIf.vue'),
    },
    {
        path: '/eventclick',
        name: 'EventClick',
        component: () => import(/* webpackChunkName: "eventclick" */ '../views/17-2_EventClick.vue'),
    },
    {
        path: '/eventchange',
        name: 'EventChange',
        component: () => import(/* webpackChunkName: "eventclick" */ '../views/18_EventChange.vue'),
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () => import(/* webpackChunkName: "computed" */ '../views/19_Computed.vue'),
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () => import(/* webpackChunkName: "watch" */ '../views/20_Watch.vue'),
    },
    {
        path: '/watch2',
        name: 'Watch2',
        component: () => import(/* webpackChunkName: "watch2" */ '../views/21_Watch2.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
