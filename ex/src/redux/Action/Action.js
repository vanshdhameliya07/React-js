const Register_User = (record) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`http://localhost:3000/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            });

            let res = await response.json();
            console.log(res);


            dispatch({
                type: "adduser",
                payload: res,
            });

            return res;
        } catch (err) {
            console.log("Registration error:", err);
            return false;
        }
    };
};
const Login_User = (login) => {

    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            });

            const res = await response.json();
            console.log(res);

            dispatch({
                type: "login_user",
                payload: res
            });

            return res;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

}
export { Register_User, Login_User };
