import React from 'react';
import PropTypes from 'prop-types';
export default class Marker extends React.Component {
    /**
     * 
     * @param {map,marker} props 
     */
    constructor(props) {
        console.log('marker');
        super(props);
        const { icon, position } = props;
        this.map = props._gd_map;
        console.log(this.map);
        this.marker = new window.AMap.Marker({
            map:this.map,
            icon,
            position
        });
    }
    render() {
        return null;
    }
}
Marker.propTypes = {
    _gd_map: PropTypes.object,
    position: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
Marker.defaultProps = {
    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
};