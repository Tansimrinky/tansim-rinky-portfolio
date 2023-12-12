import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home';
import Error from './Page/Error/Error';
import Banner from './Page/Components/Banner/Banner';
import About from './Page/Components/About/About';
import Skills from './Page/Components/Skills/Skills';
import Projects from './Page/Components/Projects/Projects';
import ContactMe from './Page/Components/ContactMe/ContactMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'><RouterProvider router={router} /></div>
  </React.StrictMode>,
)
