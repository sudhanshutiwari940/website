import axios from "axios";
export const  getProducts = (setState) => {
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    console.log(res.data);
    setState(res.data)
  })
  .catch((error)=>{
    alert("failed to get data");
    console.log(error);
  })
};