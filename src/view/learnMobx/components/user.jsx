import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('UserStore')
@observer
export default class User extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    console.log('getDerivedStateFromProps');
    // 只要调用render之前，都会触发它，这也是与componentWillReceiveProps的不同之处，由于是static，不能访问组件实例
    // 返回一个更新 state(状态) 的对象，或者返回 null 以不更新任何 state(状态)
    return null;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentupdate');
    return true;
  }
  // componentWillMount() {
  //     console.log("componentWillMount")
  // }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    // 返回一个 snapshot，并且会在componentDidUpdate函数第三个参数中接收到
    return null;
  }
  // componentWillUpdate() {
  //     console.log("componentWillUpdate")
  // }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('componentDidUpdate');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const { user } = this.props.UserStore;
    return <div>{user}</div>;
  }
}
