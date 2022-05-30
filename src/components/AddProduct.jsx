import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const handlesetForm = ()=>{

  }

  const handleSubmit = ()=>{
    
  }

  return (
    <>
      <button my={4} data-cy="add-product-button" >Add new Product</button>
      <div>
        <div div pb={6}><p>Title</p>
        <form onSubmit={handleSubmit}>
          <input data-cy="add-product-title"  placeholder="Title"
           type= "text"
            name = "title" onChange={()=> handlesetForm} />
            <p>Category</p>
          <select data-cy="add-product-category" >Category
            <option data-cy="add-product-category-shirt" value="Shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="Pants">Pants</option>
            <option data-cy="add-product-category-jeans" value="Jeans">Jeans</option>
          </select>
          <p>Gender</p>
          <select select data-cy="add-product-gender">
            <option data-cy="add-product-gender-male">Male</option>
            < option data-cy="add-product-gender-female">Female</option>
            <option data-cy="add-product-gender-unisex">Unisex</option>
          </select>
          <p>Price</p>
          <input data-cy="add-product-price" placeholder="Price" />
          <button data-cy="add-product-submit-button" type="submit">Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
