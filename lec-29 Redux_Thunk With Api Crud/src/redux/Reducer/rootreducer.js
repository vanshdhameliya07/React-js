let initialstate = {
    users: [],
    single: [],
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

        case 'deleteuser':
            let deleteuser = state.users.filter(val => val.id != action.payload.id)
            return {
                ...state,
                users: deleteuser
            }

        case 'edituser':
            let single = state.users.find(val => val.id == action.payload.id)
            return {
                ...state,
                single: single
            }

        case 'Updateuser':
            let up = state.users.map((val) => {
                if (val.id == action.payload.id) {
                    return action.payload
                }
                return val
            })
            return {
                ...state,
                users: up,
            }
        default:
            return state

    }
}
export default reducer