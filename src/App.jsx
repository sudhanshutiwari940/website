import "./App.css";
import Header from "./Header";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import Electronics from "./pages/electronics/Electronics";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import Jewelery from "./pages/jewelery/Jewelery";
import Map from "./components/map/Map";
import PageNotFound from "./components/page-not-found/pageNotFound";
import Products from "./components/products/Products";
import A from "./components/relations/A";
import UseRefComp from "./components/use-ref/UseRefComp";
import ProductDetails from "./pages/products-details/ProductDetails";
import UseReducerComp from "./components/use-reducer/UseReducerComp";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <UseReducerComp/> */}
      {/* <UseRefComp/> */}
      {/* <A/> */}
      {/* <Products/> */}
     
    <Routes>
    <Route path={"/"} element={<Home/>} /> 
     <Route path={"/electronics"} element={<Electronics/>} /> 
     <Route path={"/mens"} element={<Mens/>} /> 
     <Route path={"/womens"} element={<Womens/>} /> 
     <Route path={"/jewelery"} element={<Jewelery/>} /> 
     <Route path={"/productdetails/:id"} element={<ProductDetails/>} /> 
     <Route path={"*"} element={<PageNotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;