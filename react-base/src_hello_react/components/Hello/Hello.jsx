import {Component} from 'react';
import hello from './Hello.module.css';
export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2 className={hello.title}>Hello, react!</h2>
            </div>
        )
    }
}