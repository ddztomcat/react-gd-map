import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('item constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('item getDerivedStateFromProps');
        console.log(props, state);
        return null;
    }

    render() {
        console.log('item render', this.props.item);
        return <div>{this.props.item}</div>;
    }

    componentDidMount() {
        console.log('item componentDidMount');
    }

    getSnapshotBeforeUpdate() {
        console.log('item getSnap before Update');
        return null;
    }

    componentDidUpdate() {
        console.log('item componentDidupdate');
        
    }

    componentWillUnmount() {
        console.log('item will Unmount');
        
    }

     shouldComponentUpdate() {
        console.log('item shouldComponentupdate');
        return true;
    }
}