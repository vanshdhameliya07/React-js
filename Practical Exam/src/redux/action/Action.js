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
let DeleteUser = (id) => {
    return async (dispatch) => {
        try {
            let res = await fetch(`http://localhost:3000/student/${id}`, {
                method: "DELETE"
            });
            dispatch({
                type: "deleteuser",
                payload: id
            });

        } catch (err) {
            console.log(err);
            return false
        }
    };
};


let Edit_user = (id) => {
    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/student/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'

                },
            })

            return dispatch({
                type: "edituser",
                payload: id,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}
 const Update_user = (record) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/student/${record.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            });

            const data = await res.json();
            console.log("Updated:", data);

            dispatch({
                type: "UPDATE_USER",
                payload: data
            });

        } catch (error) {
            console.error("Update error:", error);
        }
    };
};



export { add_student, Login_user, Add_Student, DeleteUser, Edit_user, Update_user }