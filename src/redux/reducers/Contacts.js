const initialState = {
    contacts: [],
    loading: false,
}

export const Contacts = (state = initialState, action) => {
    switch (action.type) {
        case 'get/contacts/loading':
            return {
                ...state,
                loading: true
            }

        case 'get/contacts/success':
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }

        case 'edit/contact/success':
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if(contact.id === action.payload.id) {
                        return action.payload
                    }
                    return contact
                }),
            }

        case 'contacts/delete/success':
            return {
                ...state,
                contacts: state.contacts.filter(contact => {
                    if (contact.id === action.id) {
                        return false
                    }

                    return contact
                })
            }

        case 'add/contact/success':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state;
    }
}