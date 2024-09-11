import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './app/storage'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Connect the App to the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)