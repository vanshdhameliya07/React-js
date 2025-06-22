const AddUser = (data) => {
    return {
        type: "Add",
        payload: data
    }
}
const DeleteUser = (id) => {

    return {
        type: "Delete",
        payload: id
    }
}

export { AddUser, DeleteUser }