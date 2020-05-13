import React from "react";
function Details({match}) {
  
    console.log(match);
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default Details;
