const initialState = {
    login: false,
    error: false,
}

export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'sign/success':
            return {
                ...state,
                login: true,
                error: false,

            }
        case 'sign/error':
            return {
                ...state,
                error: true
            }

        case 'logout/success':
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}