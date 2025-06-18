let initailState = {
    post: []
}

let postreducer = (state = initailState, action) => {
    switch (action.type) {
        case 'getpost':
            return {
                ...state,
                post: action.payload
            }

        default:
            return state
    }
}
export default postreducer