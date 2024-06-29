
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { FormOne } from './Pages/FormOne'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<FormOne/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
        
    </>
  )
}

export default App
