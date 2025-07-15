
const Register_User = (record) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record)
            });

            const res = await response.json();
            dispatch({ type: "adduser", payload: res });
            return res;
        } catch (err) {
            console.error("Registration error:", err);
            return false;
        }
    };
};

const Login_User = (login) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/register?email=${login.email}&password=${login.password}`);
            const res = await response.json();

            if (res.length > 0) {
                dispatch({ type: "login_user", payload: res[0] });
                localStorage.setItem("loginuser", JSON.stringify(res[0]));
                return res[0];
            } else {
                return null;
            }
        } catch (err) {
            console.error("Login error:", err);
            return false;
        }
    };
};

export { Register_User, Login_User };
