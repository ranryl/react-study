import {Component} from 'react'
// 样式模块化
import welcome from './Welcome.module.css';
export default class Welcome extends Component {
    render() {
        return (
            <h2 className={welcome.title}>Welcome</h2>
        )
    }
}