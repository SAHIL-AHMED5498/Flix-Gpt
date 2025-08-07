import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Header/>
       <Toaster
  position="top-right"
  toastOptions={{
    // Global default
    duration: 4000,
    style: {
      background: '#333',
      color: '#fff',
      borderRadius: '8px',
    },
    // Success toasts
    success: {
      icon: '✅',
      style: {
        background: '#16a34a', // Tailwind green-600
        color: '#fff',
      },
    },
    // Error toasts
    error: {
      icon: '⚠️',
      style: {
        background: '#991b1b', // Tailwind red-600
        color: '#fff',
      },
    },
     removeDelay: 1000,
  }}
/>
      <Outlet/>
    </div>
  )
}

export default Layout
