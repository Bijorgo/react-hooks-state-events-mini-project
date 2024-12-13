import React from "react";

function CategoryFilter({categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( category => 
        <button key= {category.name}>{category.name}</button>
      )}
    </div>
  );
}

export default CategoryFilter;
