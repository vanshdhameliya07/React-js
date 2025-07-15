let initalstate = {
    user: JSON.parse(localStorage.getItem("user")) || [],
    login: JSON.parse(localStorage.getItem("login")) || [],
    student: JSON.parse(localStorage.getItem('student')) || [],
}

let crudreducer = (state = initalstate, action) => {
    switch (action.type) {
        case "Add_Student":
            let data = [...state.user, action.payload]
            localStorage.setItem("user", JSON.stringify(data))
            return {
                ...state,
                user: data
            }

        case "login_user":
            localStorage.setItem("login", JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload

            }

        case "Add":
            let oldrecord = [...state.student, action.payload]
            localStorage.setItem('student', JSON.stringify(oldrecord))

            return {
                ...state,
                student: oldrecord
            }

        case 'deleteuser':
            let deleteuser = state.student.filter((val) => val.id !== action.payload);
            localStorage.setItem('student', JSON.stringify(deleteuser));
            return {
                ...state,
                student: deleteuser
            };
        case 'edituser':

            let single = state.student.find(val => val.id == action.payload.id)
            return {
                ...state,
                single: single
            }



        case "UPDATE_USER":
            const updatedList = state.student.map((val) =>
                val.id === action.payload.id ? action.payload : val
            );

            localStorage.setItem("student", JSON.stringify(updatedList));

            return {
                ...state,
                student: updatedList,
            };


        default:
            return state
    }
}
export default crudreducer