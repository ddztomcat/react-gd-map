
import Loading from '@/components/Loading';
import Loadable from 'react-loadable';
// import Xmap from '@/components/xmap/demo';
// import LearnRedux from '@/view/learnRedux/index';
// import Home from '@/view/home/index';
const LoadableXmap = Loadable({
    loader: () => import('@/components/xmap/demo'),
    loading: Loading,
});
const LoadableLearnRedux = Loadable({
    loader: () => import('@/view/learnRedux/index'),
    loading: Loading,
});
const LoadableHome = Loadable({
    loader: () => import('@/view/home/index'),
    loading: Loading,
});
const routes = [
    {
        path: '/',
        component: LoadableXmap
    },
    {
        path: '/learnRedux',
        component: LoadableLearnRedux
    },
    {
        path: '/home',
        component: LoadableHome
    },
];
// const routes = [
//     {
//         path: '/',
//         component: Xmap
//     },
//     {
//         path: '/learnRedux',
//         component: LearnRedux
//     },
//     {
//         path: '/home',
//         component: Home
//     },
// ];
export default routes;
export {LoadableXmap, LoadableLearnRedux, LoadableHome};