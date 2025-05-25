import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/signup'
import Login from './pages/login'
import Home  from './pages/Home'
import Navbar from './components/Navbar'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

export const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/signup",
      element:<Signup />
    },
    {
      path:"/home",
      element:<Home/>
    },
  ])
    return (
      <>
      <RouterProvider router={router}/>
      </>
    )
  }

  export default App




