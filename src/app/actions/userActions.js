export  const fetchBooksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}

export  const fetchBooksSuccess = data => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: data
    }
}

export  const fetchBooksFailure = err => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
}