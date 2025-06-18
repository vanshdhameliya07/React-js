let initialState = {
    users: [],
    err: null
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AddUser":
            return state;

        default:
            return state
    }
}
export default reducer