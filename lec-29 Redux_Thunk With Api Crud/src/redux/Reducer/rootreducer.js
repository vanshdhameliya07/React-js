let initialstate = {
    users: [],
    err: null
}

let reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'adduser':
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case 'viewuser':
            return {
                ...state,
                users: action.payload,
            }

        default:
            return state

    }
}
export default reducer