import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Tasks from './components/Tasks/Tasks.jsx'
import Stats from './components/Stats/Stats.jsx'
import Add from './components/Add/Add.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
   
    path:"",
    element: <Home/>
  },{
    path:"/tasks",
    element: <Tasks/>
  },{
    path:"/stats",
    element:<Stats/>
  },{
    path:"/add",
    element:<Add/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
