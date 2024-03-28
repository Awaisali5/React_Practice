import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Router/Root.jsx'
import ErrorPage from './components/Router/ErrorPage.jsx'
import Contact from './components/Router/Contact/Contact.jsx'


const router=createBrowserRouter([

  {
    path: "/",
    element : <Root />,
    errorElement: <ErrorPage />,
    children: [
      {

        path: "/Contact/:Contactid",
        element : <Contact />
      },

    ],

  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
    
    <App />
    
    </BrowserRouter> */}

    <RouterProvider router={router} />
  </React.StrictMode>,
)
