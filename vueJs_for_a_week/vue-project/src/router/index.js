import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NestedComponent from '../views/NestedComponent.vue';

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
        component: () => import(/* webpackChunkName: "databinding" */ '../views/component_basic/01_DataBinding.vue'),
    },
    {
        path: '/databindinghtml',
        name: 'DataBindingHtml',
        component: () =>
            import(/* webpackChunkName: "databindinghtml" */ '../views/component_basic/02_DataBindingHtml.vue'),
    },
    {
        path: '/databindinginputtext',
        name: 'DataBindingInputText',
        component: () =>
            import(
                /* webpackChunkName: "databindinginputtext" */ '../views/component_basic/03_DataBindingInputText.vue'
            ),
    },
    {
        path: '/databindinginputnumber',
        name: 'DataBindingInputNumber',
        component: () =>
            import(
                /* webpackChunkName: "databindinginputnumber" */ '../views/component_basic/04_DataBindingInputNumber.vue'
            ),
    },
    {
        path: '/databindingtextarea',
        name: 'DataBindingTextarea',
        component: () =>
            import(/* webpackChunkName: "databindingtextarea" */ '../views/component_basic/05_DataBindingTextarea.vue'),
    },
    {
        path: '/databindingselect',
        name: 'DataBindingSelect',
        component: () =>
            import(/* webpackChunkName: "databindingselect" */ '../views/component_basic/06_DataBindingSelect.vue'),
    },
    {
        path: '/databindingcheckbox',
        name: 'DataBindingCheckbox',
        component: () =>
            import(/* webpackChunkName: "databindingcheckbox" */ '../views/component_basic/07_DataBindingCheckbox.vue'),
    },
    {
        path: '/databindingcheckbox2',
        name: 'DataBindingCheckbox2',
        component: () =>
            import(
                /* webpackChunkName: "databindingcheckbox2" */ '../views/component_basic/08_DataBindingCheckbox2.vue'
            ),
    },
    {
        path: '/databindingradio',
        name: 'DataBindingRadio',
        component: () =>
            import(/* webpackChunkName: "databindingradio" */ '../views/component_basic/09_DataBindingRadio.vue'),
    },
    {
        path: '/databindingattribute',
        name: 'DataBindingAttribute',
        component: () =>
            import(
                /* webpackChunkName: "databindingattribute" */ '../views/component_basic/10_DataBindingAttribute.vue'
            ),
    },
    {
        path: '/databindingbutton',
        name: 'DataBindingButton',
        component: () =>
            import(/* webpackChunkName: "databindingbutton" */ '../views/component_basic/11_DataBindingButton.vue'),
    },
    {
        path: '/databindingclass',
        name: 'DataBindingClass',
        component: () =>
            import(/* webpackChunkName: "databindingclass" */ '../views/component_basic/12_DataBindingClass.vue'),
    },
    {
        path: '/databindingclass2',
        name: 'DataBindingClass2',
        component: () =>
            import(/* webpackChunkName: "databindingclass2" */ '../views/component_basic/13_DataBindingClass2.vue'),
    },
    {
        path: '/databindingstyle',
        name: 'DataBindingStyle',
        component: () =>
            import(/* webpackChunkName: "databindingstyle" */ '../views/component_basic/14_DataBindingStyle.vue'),
    },
    {
        path: '/databindinglist',
        name: 'DataBindingList',
        component: () =>
            import(/* webpackChunkName: "databindinglist" */ '../views/component_basic/15_DataBindingList.vue'),
    },
    {
        path: '/renderingvif',
        name: 'RenderingVIf',
        component: () =>
            import(/* webpackChunkName: "databindingrenderingvif" */ '../views/component_basic/16_RenderingVIf.vue'),
    },
    {
        path: '/eventclick',
        name: 'EventClick',
        component: () => import(/* webpackChunkName: "eventclick" */ '../views/component_basic/17-2_EventClick.vue'),
    },
    {
        path: '/eventchange',
        name: 'EventChange',
        component: () => import(/* webpackChunkName: "eventclick" */ '../views/component_basic/18_EventChange.vue'),
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () => import(/* webpackChunkName: "computed" */ '../views/component_basic/19_Computed.vue'),
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () => import(/* webpackChunkName: "watch" */ '../views/component_basic/20_Watch.vue'),
    },
    {
        path: '/watch2',
        name: 'Watch2',
        component: () => import(/* webpackChunkName: "watch2" */ '../views/component_basic/21_Watch2.vue'),
    },
    {
        path: '/databindinglist2',
        name: 'DataBindingList2',
        component: () =>
            import(/* webpackChunkName: "databindinglist2" */ '../views/component_basic/22_DataBindingList2.vue'),
    },
    {
        path: '/nested',
        name: 'NestedComponent',
        component: NestedComponent,
    },
    {
        path: '/mixins',
        name: 'Mixins',
        component: () => import(/* webpackChunkName: "mixins" */ '../views/component_advanced/12_Mixins.vue'),
    },
    {
        path: '/plugins',
        name: 'Plugins',
        component: () => import(/* webpackChunkName: "plugins" */ '../views/component_advanced/14_Plugins.vue'),
    },
    {
        path: '/kakaologin',
        name: 'KakaoLogin',
        component: () => import(/* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue'),
    },
    {
        path: '/naverlogin',
        name: 'NaverLogin',
        component: () => import(/* webpackChunkName: "naverlogin" */ '../views/NaverLogin.vue'),
    },
    {
        path: '/googlelogin',
        name: 'GoogleLogin',
        component: () => import(/* webpackChunkName: "googlelogin" */ '../views/GoogleLogin.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
