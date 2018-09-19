
import Loading from '@/components/Loading';
import Loadable from 'react-loadable';

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
        path: '/map',
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
export default routes;
export {LoadableXmap, LoadableLearnRedux, LoadableHome};