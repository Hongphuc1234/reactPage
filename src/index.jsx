import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './login/login'
import LoginForm from './loginForm/loginForm'
import App from './home'
import RegisterPage from './registerPage/registerPage'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/login',
    element: <Login/>,
  },
  {
    path:'/register',
    element: <RegisterPage/>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    //  <React.StrictMode>
   

        <RouterProvider router={router} />
  
  
    //  </React.StrictMode>
  )