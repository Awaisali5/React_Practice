import "./App.css";
import "./index.css"
import Cards from "./components/Cards"
import ProductTab from "./components/ProductTab";
import ItemList from "./components/ListItem";
import { Route ,Routes , Link} from "react-router-dom";

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import Home from "../src/components/Router/Home/Home"
import Footer from "./components/Router/Footer/Footer"
import Header from "./components/Router/Header/Header"
import Contact from "./components/Router/Contact/Contact"
// import Layout from "./components/Router/Layout";

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
  // const Router= createBrowserRouter 
  // ([

    
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/",
  //     element: <Header />
  //   },
  //   {
  //     path: "/",
  //     element: <Contact />
  //   },

  //   {
  //     path: "/",
  //     element: <Footer />
  //   },

  // ])

  // using Layout approch 


  // const router=createBrowserRouter([


  //   {
  //     // parent layout component 
  //     element: < Layout />,
  //     // children component route 

  //     children:[
  //       {
  //         path: '/',
  //         element: <Home />,
  //       },

  //       {
  //         path: '/Contact',
  //         element: <Contact />,
  //       },



  //     ],
  //   },

  // ])

  return (
    <div>
     

  <h2> React Routes</h2>

  <nav>

    <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/Contact">Contact</Link></li>
      <li> <Link to="/Header">Header</Link></li>
      <li> <Link to="/Footer">Footer</Link></li>
      

    </ul>
  </nav>

  {/* <RouterProvider router={router } /> */}

  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />

    <Route path="/Header" element={<Header />} />
    <Route path="/Footer" element={<Footer />} />
    {/* <Route path="/Footer/:id" element={<Footer />} /> */}




  </Routes>

    </div>
    
  );
}

export default App;
