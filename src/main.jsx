import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import router from './routers/Router.jsx'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='font-serif w-5/6 m-auto'>
        <RouterProvider router={router} ></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
