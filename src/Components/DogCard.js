import React from "react";

function DogCard({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="dog-image" />
      <p className="title">{title}</p>
    </div>
  );
}

export default DogCard;
