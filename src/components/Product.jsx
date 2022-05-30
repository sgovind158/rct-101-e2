import React from "react";
import style from "./style.module.css"
const Product = ({productItem}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
   <>
   



    
    <div className={style.grid} >
    
    {productItem.map((el,index)=>(
        <div>
      <div key={index}  data-cy="product">
       <img data-cy="product-image" src={el.imageSrc} />
     
      <div className= {style.end}>
      <p data-cy="product-category"> {el.category}</p>
        <p data-cy="product-gender">{el.gender} </p>
      </div>
      <p data-cy="product-title">{el.title}</p>
      <p data-cy="product-price">{el.price}</p>

      </div>
      </div>
    ))}
    </div>
    
    </>
  );
};

export default Product;
