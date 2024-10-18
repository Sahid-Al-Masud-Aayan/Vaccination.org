import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'

function App() {

  const controller = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={controller}/>
    </>
  )
}

export default App
