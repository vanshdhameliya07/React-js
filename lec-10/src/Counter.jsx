import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            cnt: 0
        }
    }

    increment() {
        this.setState({ cnt: this.state.cnt + 1 })
    }
    decrement() {
        this.setState({ cnt: this.state.cnt - 1 })
    }
    reset() {
        this.setState({ cnt: this.state.cnt = 0 })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>cnt :{this.state.cnt}</h2>
                <button onClick={() => this.increment()}>+</button>
                <button disabled={this.state.cnt == 0} onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.reset()}>reset</button>
            </div>
        )
    }
}

export default Counter