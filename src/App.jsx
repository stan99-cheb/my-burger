import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout/root-layout'
import ConstructorPage from './pages/ConstructorPage/constructor-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <ConstructorPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;