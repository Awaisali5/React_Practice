import "./App.css";
import Cards from "./components/Cards"
import ProductTab from "./components/ProductTab";
import ItemList from "./components/ListItem";


// function Greeting(){
//   return (
//     <>
//     <h2>Welcome to the Mern Stack development</h2>
//     <h3>We are learning React Js now</h3>
//     </>
//   )
// }


function App() {
  return (
    <div>
     <button>Start React part 2 </button>
     <Cards />
     
     <div className="products">
      <ProductTab />
      <ItemList />
     </div>

    

    </div>
    
  );
}

export default App;
