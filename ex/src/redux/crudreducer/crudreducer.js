const initialState = {
    users: [],
    loginUser: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "adduser":
            return { ...state, users: [...state.users, action.payload] };
        case "login_user":
            return { ...state, loginUser: action.payload };
        default:
            return state;
    }
};

export default reducer;
