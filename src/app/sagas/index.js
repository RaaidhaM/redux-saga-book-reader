import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function * fetchBooksRequested() {
    yield takeEvery('FETCH_BOOKS_REQUESTED', fetchBooks)
}

function fetchBooksApi() {
    return axios.get('https://www.anapioficeandfire.com/api/books')
}

function * fetchBooks () {
    const { data, err } = yield call(fetchBooksApi, {})
    if (data) {
        yield put({ type: 'FETCH_BOOKS_SUCCESS', payload: data })
    } else {
        yield put({ type: 'FETCH_BOOKS_FAILURE', payload: err })
    }
}

export default fetchBooksRequested