const initialState = {
    books: [],
    status: 'INITIAL',
    err: ""
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return { ...state, status: 'INPROGRESS' }

        case 'FETCH_BOOKS_SUCCESS':
            return { ...state, books: action.payload, status: 'COMPLETED', err: "" }

        case 'FETCH_BOOKS_FAILURE':
            return { ...state, status: 'FAILED', books: [], err: action.payload }

        default:
            return state
    }
}

export default bookReducer