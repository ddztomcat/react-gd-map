import React, { Component } from "react"
import s from "./home.scss"
import cs from "classnames"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        console.log("getDerivedStateFromProps")
        return null
    }
    handelClick = () => {
        this.setState({
            show: !this.state.show
        })
    }
    shouldComponentUpdate() {
        console.log("shouldComponentupdate")
        return true
    }
    // componentWillMount() {
    //     console.log("componentWillMount")
    // }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        const { show } = this.state
        return (<div ref="" className={cs(s.home, "test")}>
            <button onClick={this.handelClick}>click</button>
            {show && <div>我是个傻逼</div>}
        </div>)
    }
}