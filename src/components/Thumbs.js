import React from "react";
import Thumb from "./Thumb.js";

function Thumbs(props) {
  return (
    <div className="thumbs">
      {props.thumbs.map((image, id) => (
        <Thumb
          image={image}
          receiver={props.receiver}
          clickHandler={props.handleClick}
          key={id}
        />
      ))}
    </div>
  );
}

export default Thumbs;
