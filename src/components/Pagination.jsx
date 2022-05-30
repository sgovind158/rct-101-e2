import React from "react";

const Pagination = ({pageSet,prevSet}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <>
  
    <div>
    
      <button data-cy="pagination-first-button">first page</button>
      <button data-cy="pagination-previous-button" onClick={()=>prevSet()} >prev page</button>
      <select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </select>
      <button data-cy="pagination-next-button" onClick={()=>pageSet()}>next page </button>
      <button data-cy="pagination-last-button"  > last page</button>
    </div>
    </>
  );
};

export default Pagination;
