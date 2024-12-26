import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Blog from './assets/Blog.jsx'
import Team from './components/Team.jsx'
import About from './components/About.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Hero/>
      },
      {
        path:"Feature",
        element:<Feature/>
      },
      {
        path:"Blog",
        element:<Blog/>
      },
      {
        path:"Team",
        element:<Team/>
      },
      {
        path:"About",
        element:<About/>
      }
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
