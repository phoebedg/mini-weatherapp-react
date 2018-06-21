import React from "react";

function Photo({ mainImage }) {
  return (
    <div className="photo">
      <img src={mainImage} />
    </div>
  );
}

export default Photo;
