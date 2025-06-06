const Increment = () => {
    return {
        type: "inc"
    }
}
const decrement = () => {
    return {
        type: "dec"
    }
}
const reset = () => {
    return {
        type: "res"
    }
}
export { Increment, decrement, reset }