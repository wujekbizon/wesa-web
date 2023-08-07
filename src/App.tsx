import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// components
import { CustomError, HomeLayout, Solutions, Developers, Customers, Home } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
      },
      {
        path: 'developers',
        element: <Developers />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
    ],
  },

  {
    path: '*',
    element: <CustomError />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
