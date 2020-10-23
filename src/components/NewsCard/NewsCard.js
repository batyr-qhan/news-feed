import React from "react";
import "./newsCard.css";
import Tag from "../Tag/Tag.js";

export default function NewsCard({ id, title, desc, imageUrl, tags }) {
  return (
    <div className="card">
      <div className="card__tags">
        {tags.map((props, index) => (
          <Tag key={index} {...props} />
        ))}
      </div>
      <img className="card__image" src={imageUrl} alt="banner" />
      <h2>{title}</h2>
      <div>{desc}</div>
    </div>
  );
}
