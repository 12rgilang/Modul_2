

export const SetIncrement = () => {
    return{
        type: 'INCREMENT'
    }
}

export const SetDecrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const SetData = (username, password) => {
    return{
        type: 'Signin',
        payload: {username: username, password: password}
    }
}