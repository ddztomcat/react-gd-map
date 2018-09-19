import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
// import  {LoadableXmap, LoadableLearnRedux, LoadableHome} from './index'
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
const App = () => {
    return <Router>
        <div>
        <Switch>
            <Route exact path="/" component={LoadableHome} />
            {/* <Route path="/map" component={LoadableXmap} /> */}
            <Route path="/map" component={LoadableXmap} />
            <Route path="/learn" component={LoadableLearnRedux} />
            
        </Switch>
        </div>
    </Router>;
};
export default App;