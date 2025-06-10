
let Adduser = (data) => {

    return {
        type: "add",
        payload: data
    }
}
let deleteuser = (id) => {
    return {
        type: "delete",
        payload: id
    }
}
let edituser = (id) => {
    return {
        type: "edit",
        payload: id
    }
}
export { Adduser, deleteuser, edituser }