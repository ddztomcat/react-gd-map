import React from 'react';
import Item from './item';
export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('todolist constructor');
    }

    static getDerivedStateFromProps(){
        console.log('todolist getDerivedStateFromProps');
        return null;
    }

    render() {
        console.log('todolist render');
        return this.props.List.map((item, ind) => <Item key={ind} {...item}/>);
    }

    componentDidMount() {
        console.log('todolist componentDidMount');
    }

    getSnapshotBeforeUpdate() {
        console.log('todolist getSnap before Update');
        return null;
    }

    componentDidUpdate() {
        console.log('todolist componentDidupdate');
        
    }

    componentWillUnmount() {
        console.log('todolist will Unmount');
        
    }
}