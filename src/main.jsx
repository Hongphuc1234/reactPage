import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { createTheme } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import Login from './login/login'
import LoginForm from './loginForm/loginForm'
import App from './home'

const theme = createTheme()

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/login',
    element: <Login/>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    //  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </ThemeProvider>,
    //  </React.StrictMode>
  )