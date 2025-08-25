import {useState,useEffect} from 'react'
import "./Products.css";
import { getProducts } from '../../services/Product';
import Product from '../product/Product';

function Products({title}) {
    const [state,setState] = useState([])

     useEffect(()=>{
        getProducts(setState);
     },[])

  return (
    <div className="products">
        <div className="brandContainer">
            <div className="shadow">
                <h1>{title} Information</h1>
                <p style={{color:"white", textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, laboriosam, recusandae voluptatibus commodi non facere omnis ab minima quisquam vel eius, assumenda tempora ratione rem error eveniet aut ullam doloribus. Voluptatibus, beatae. Eius sapiente cum quia ipsa suscipit dignissimos facilis officiis natus dolor qui. Numquam laboriosam porro quisquam odio, officiis architecto explicabo asperiores distinctio accusantium libero veritatis cum magnam.</p>
            </div>
        </div>
        <div className="product">
            {
                state.length > 0 && state.filter((product)=>{
                    return product.category===title})
                    .map((product)=>{
                    return (
                        <Product 
                        image={product.image} 
                        title={product.title} 
                        price={product.price}
                        id={product.id}
                        />
                    );
                })
            }
        </div>
    </div>
  )
}

export default Products