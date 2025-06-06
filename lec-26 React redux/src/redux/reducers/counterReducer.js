let zero = 0;

let Counter = (state = zero, action) => {
    switch (action.type) {
        case "inc":
            return state + 1
        case "dic":
            return state - 1
        case "res":
            return state = 0
        default:
            return state
    }
}
export default Counter