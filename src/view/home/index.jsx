import React, { Component } from 'react'
import s from './home.scss'
import cs from 'classnames'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    // componentWillReceiveProps() {

    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        console.log('getDerivedStateFromProps')
        // 只要调用render之前，都会触发它，这也是与componentWillReceiveProps的不同之处，由于是static，不能访问组件实例
        // 返回一个更新 state(状态) 的对象，或者返回 null 以不更新任何 state(状态)
        return null
    }
    handelClick = () => {
        this.setState({
            show: !this.state.show
        })
    }
    shouldComponentUpdate() {
        console.log('shouldComponentupdate')
        return true
    }
    // componentWillMount() {
    //     console.log("componentWillMount")
    // }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        // 返回一个 snapshot，并且会在componentWillUpdate函数第三个参数中接收到
        return null
    }
    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }
    componentDidUpdate(preProps, preState, snapshot) {
        console.log('componentDidUpdate')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        const { show } = this.state
        return (<div className={cs(s.home, 'test')}>
            <button onClick={this.handelClick}>click</button>
            {show && <div>我是个傻逼</div>}
        </div>)
    }
}