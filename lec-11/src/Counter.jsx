import { Component } from "react"

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            cnt: 0
        }
    }


    componentDidMount() {
        console.log("start");
    }
    componentDidUpdate() {
        console.log("code update");
    }
    componentWillUnmount() {
        console.log("end");
    }

    plus() {
        this.setState({ cnt: this.state.cnt + 1 })
    }
    minus() {
        this.setState({ cnt: this.state.cnt - 1 })
    }


    render() {
        return (
            <>
                <h1>Counter</h1>
                <h2>cnt :{this.state.cnt}</h2>
                <button onClick={() => this.plus()}>+</button>
                <button onClick={() => this.minus()}>-</button>
            </>
        )
    }
}

export default Counter