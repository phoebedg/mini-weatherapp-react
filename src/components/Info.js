import React from "react";

function Info({ description, author }) {
  return (
    <div className="info">
      <div className="info__item">
        <div className="info__item--conditions">{description}</div>
        <div className="info__item--credits">{author}</div>
      </div>
    </div>
  );
}

export default Info;
