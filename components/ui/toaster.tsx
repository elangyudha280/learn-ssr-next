'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify'

function Toaster() {
  return (
    <ToastContainer
        position="top-center"
        autoClose={3000}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
  )
}

export default Toaster