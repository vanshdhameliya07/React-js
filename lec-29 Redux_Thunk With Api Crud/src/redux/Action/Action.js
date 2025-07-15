let Add_user = (record) => {
    
    return async (dispatch) => {
        try {
            let data = await fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            })
            let res = await data.json()

            return dispatch({
                type: "adduser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}
let view_user = (record) => {
    return async (dispatch) => {
        try {
            let data = await fetch('http://localhost:3000/users', {
                method: "GET",
            })

            let res = await data.json()

            return dispatch({
                type: "viewuser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}
let Delete_user = (id) => {

    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE",
            })

            let res = await data.json()


            return dispatch({
                type: "deleteuser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}

let Edit_user = (id) => {
    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/users/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'

                },
            })

            let res = await data.json()

            return dispatch({
                type: "edituser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}
let Update_user = (record) => {


    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/users/${record.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(record)
            })

            let res = await data.json()



            return dispatch({
                type: "Updateuser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}

export { Add_user, view_user, Delete_user, Edit_user, Update_user }