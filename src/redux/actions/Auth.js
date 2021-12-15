export const sign = (login, pass) => {
    return dispatch => {
        fetch('/authorization')
            .then(res => res.json())
            .then(json => {
                if (json.login === login && json.password === pass) {
                    dispatch({
                        type: 'sign/success'
                    })
                }else {
                    dispatch({
                        type: 'sign/error'
                    })
                }
            })
    }
}

export const logout = () => {
    return {
        type: 'logout/success'
    }
}