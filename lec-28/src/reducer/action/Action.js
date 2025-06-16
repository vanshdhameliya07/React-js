let getpost = () => {
    return async (dispatch) => {
        try {
            let data = await fetch('https://dummyjson.com/posts', {
                method: "GET",
                headers: {
                    'Content-Type': 'appliaction/json'
                }
            })
            let res = await data.json()
            return dispatch({
                type: "getpost",
                payload: res.posts

            })

        }
        catch (err) {
            console.log(err);
            return false
        }
    }
}
export { getpost }