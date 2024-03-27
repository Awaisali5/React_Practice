import "./App.css";
import "./input.css"
import Cards from "./components/Cards"
import ProductTab from "./components/ProductTab";
import ItemList from "./components/ListItem";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../src/components/Router/Home/Home"
import Footer from "./components/Router/Footer/Footer"
import Header from "./components/Router/Header/Header"
import Contact from "./components/Router/Contact/Contact"

// function Greeting(){
//   return (
//     <>
//     <h2>Welcome to the Mern Stack development</h2>
//     <h3>We are learning React Js now</h3>
//     </>
//   )
// }


function App() {

  // initilaze the Browser Router 
  const Router= createBrowserRouter 
  ([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/",
      element: <Header />
    },
    {
      path: "/",
      element: <Contact />
    },

    {
      path: "/",
      element: <Footer />
    },

  ])
  return (
    <div>
     

  <h2 className="bg-"> React Routes</h2>

  <RouterProvider router={Router } />

    </div>
    
  );
}

export default App;
