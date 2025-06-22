
let initialState = {
    user: JSON.parse(localStorage.getItem("user")) || []
}

let CrudReducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            let old = [...state.user, action.payload]
            localStorage.setItem("user", JSON.stringify(old))
            return {
                ...state,
                user: old
            }

        case "Delete":
            let Deleteuser = state.user.filter(val => val.id !== action.payload.id)
            localStorage.setItem("user", JSON.stringify(Deleteuser))

            return {
                ...state,
                user: Deleteuser
            }



        default:
            return state;
    }
}

export default CrudReducer;
