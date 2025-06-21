import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let initialState = {
    user: []
}

let CrudReducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            let old = [...state.user, action.payload]

            toast.success("Note Added Successfully...", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                    borderLeft: "5px solid #42CC46"
                }
            });

            return {
                ...state,
                user: old
            }

        default:
            return state;
    }
}

export default CrudReducer;
