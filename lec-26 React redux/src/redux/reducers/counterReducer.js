let initialize = 0;

let Counter = (state = initialize, action) => {
    switch (action.type) {
        case "inc":
            return state + 1

        default:
            return state
    }
}

export default Counter