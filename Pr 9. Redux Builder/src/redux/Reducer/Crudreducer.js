import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

let initialState = {
    user: JSON.parse(localStorage.getItem("user")) || []
}

let CrudReducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            let old = [...state.user, action.payload]
            localStorage.setItem("user", JSON.stringify(old))

            toast.success("User Added Notes Successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light"
            })

            return {
                ...state,
                user: old
            }

        case "Delete":
            let Deleteuser = state.user.filter(val => val.id != action.payload)
            localStorage.setItem("user", JSON.stringify(Deleteuser))
            toast.warn(" Deleted Notes Successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light"
            })

            return {
                ...state,
                user: Deleteuser
            }

        default:
            return state;
    }
}

export default CrudReducer;
