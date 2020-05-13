import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div>
      <h1>Shop page</h1>
      <Link to="shop/div1">
        <div> Div 1 </div>
      </Link>
      <Link to="shop/div2">
        <div> Div 2 </div>
      </Link>
    </div>
  );
}

export default Shop;
