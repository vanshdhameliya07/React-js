let Increment = () => {
    return {
        type: "inc"
    }
}
let decrement = () => {
    return {
        type: "dic"
    }
}
let reset = () => {
    return {
        type: "res"
    }
}
export { Increment, decrement,reset }