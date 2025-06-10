let initialize = {
    user: JSON.parse(localStorage.getItem('user')) || []
}

let CrudReducer = (state = initialize, action) => {

    switch (action.type) {
        case 'add':
            let oldrecord = [...state.user, action.payload]
            localStorage.setItem('user', JSON.stringify(oldrecord))

            return {
                ...state,
                user: oldrecord
            }
        case 'delete':

            let deleteuser = state.user.filter(val => val.id != action.payload)
            localStorage.setItem('user', JSON.stringify(deleteuser))

            return {
                ...state,
                user: deleteuser
            }

        case 'edit':

            let edituser = state.user.find(val => val.id == action.payload)
            console.log(edituser);


        default:
            return state
    }
}
export default CrudReducer