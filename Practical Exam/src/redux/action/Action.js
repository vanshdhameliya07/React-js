let add_student = (record) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record)
            })
            const res = await data.json();
            return dispatch({
                type: "Add_Student",
                payload: res
            })


        } catch (err) {
            console.log(err);
            return false

        }
    }

}
let Login_user = (login) => {

    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/register?email=${login.email}&password=${login.password}`)
            const res = await data.json();


            if (res.length > 0) {
                alert("valid user")
                return dispatch({
                    type: "login_user",
                    payload: res[0]


                });
            } else {
                alert("Invalid email or password");
                return false;
            }




        } catch (err) {
            console.log(err);
            return false

        }
    }

}
let Add_Student = (detail) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/student`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(detail)
            })

            const res = await data.json();

            return dispatch({
                type: "Add",
                payload: res
            })


        } catch (err) {
            console.log(err);
            return false

        }
    }
}
const DeleteUser = (id) => {
    return async (dispatch) => {
        try {
            let deleteid = await fetch(`http://localhost:3000/student/${id}`, {
                method: "DELETE"
            });
            console.log(deleteid);
            
            dispatch({
                type: "DELETE_USER",
                payload: deleteid
            });


        } catch (error) {
            console.log(error);
            return false;
        }
    };
};
export { add_student, Login_user, Add_Student, DeleteUser }