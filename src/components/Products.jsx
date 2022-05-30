import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import axios from "axios"


const Products = () => {
  const [productItem, setProductItem] = useState([{ }])
  const [page,setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  useEffect(()=>{
      let getItem = async ()=>{
     let res =   await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
       console.log(res.data)
       setProductItem(res.data)
      }
      getItem()

      
  },[page,limit])

  const pageSet = (value)=>{
    if(page  >= 1)
    setPage(page  + 1)
    console.log("next page")
     }

  const prevSet = ()=>{
console.log("set")
   if(page >= 1){
     console.log("page - 1  ")
    setPage( page - 1)
   }
   
  }
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
     
  return (
       <>
    

   
    <div  >
     
     <AddProduct/>
   
      <div>
    
         <Product productItem = {productItem}   />
         </div>
     <Pagination  pageSet = {pageSet}  prevSet = {prevSet} />
    </div>
    </>  
  );
};

export default Products;
