import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-zinc-900 w-screen h-screen overflow-x-hidden'>
    <App />
    </div>
  </React.StrictMode>,
)
