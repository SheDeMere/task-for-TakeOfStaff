export const getContacts = () => {
    return dispatch => {
        dispatch({type: 'get/contacts/loading'})
            fetch('/contacts')
            .then(res => res.json())
                .then(json => {
                   dispatch({
                       type: 'get/contacts/success',
                       payload: json
                   })
                })
    }
}


export const editContact = (name, desc, img, id) => dispatch => {
    return  (
        fetch(`/contacts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                img: img,
                name: name,
                desc: desc
            }),
            headers: { 'Content-type': 'application/json; charset=utf-8' },
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'edit/contact/success',
                    payload: json
                })
            })

    )
}

export const deleteContact = ({id}) => {

    return dispatch => {
                fetch(`/contacts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        dispatch({
                            type: 'contacts/delete/success',
                            id: id
                        })
                    })
    }
}


export const addContact = (name, desc, img, id) => dispatch => {
    return (
        fetch('/contacts', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                name: name,
                img: img,
                desc: desc
            }),
            headers: { 'Content-type': 'application/json; charset=utf-8' },
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'add/contact/success',
                    payload: json
                })
            })
    )
}