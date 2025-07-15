const initialState = {
    users: JSON.parse(localStorage.getItem('register')) || [],
    login: JSON.parse(localStorage.getItem('loginuser')) || [],

};

let crudreducer = (state = initialState, action) => {
    switch (action.type) {
        case "adduser":
            let registeruser = [...state.users, action.payload]
            localStorage.setItem('register', JSON.stringify(registeruser))

            return {
                ...state,
                users: registeruser
            };

        case "login_user":
            let login = [...state.login, action.payload]
            localStorage.setItem("loginuser", JSON.stringify(login))
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}

export default crudreducer