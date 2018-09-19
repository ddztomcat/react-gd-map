import React from 'react';
import PropTypes from 'prop-types';
import s from './index';
const Children = React.Children;
export default class Xmap extends React.Component {
    /**
     * 
     * @param {map,mapContainer} props 
     */
    constructor(props) {
        super(props);
        // console.log('map')
        this.mapContainer = React.createRef();
        this.state = {};
    }
    static getDerivedStateFromProps(props,state) {
        // console.log("getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate() {
        // console.log('shouldComponentupdate')
        return true;
    }
    componentDidMount() {
        console.log('componentDidMount');
        const { zoom, center } = this.props;
        this.map = new window.AMap.Map(this.mapContainer.current, {
            center,
            zoom
        });
    }
    getSnapshotBeforeUpdate() {
        // console.log('getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        // console.log('componentDidUpdate')
    }
    renderChildren() {
        return Children.map(this.props.children, (child) => {
            if (child) {
                const cType = child.type;
                /* 针对下面两种组件不注入地图相关属性
                 * 1. 明确声明不需要注入的
                 * 2. DOM 元素
                 */
                if (typeof cType === 'string') {
                    return child;
                }
                // console.log(this.map)
                return React.cloneElement(child, {
                    _gd_map: this.map
                });
            }
            return child;
        });
    }
    render() {
        // console.log('render')
        return (
            <div ref={this.mapContainer} className={s.map_container}>
                {this.renderChildren()}
            </div>
        );
    }
}
Xmap.propTypes = {
    zoom: PropTypes.number,
    center: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};
Xmap.defaultProps = {
    zoom: 11,
    cneter: [116.397428, 39.90923]
};