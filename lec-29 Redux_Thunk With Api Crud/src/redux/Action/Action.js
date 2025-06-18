let Add_user = (record) => {
    return async (dispatch) => {
        try {
            let data = await fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'appliaction/json'
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

export { Add_user, view_user }