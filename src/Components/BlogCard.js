import React from "react";
import "../CSS/BlogCardWindow.css";
import "../CSS/BlogcardMobile.css";
const BlogCard = (prop) => {
  return (
    <div className="BlogCard">
      <div id="image">
        <img src={prop.img} alt="Logo" />
      </div>
      <div id="BlogHead">
        <h3>{prop.title}</h3>
      </div>
      <div id="BlogPara">
        <p>{prop.description}</p>
      </div>
      <div id="BlogBtn">
        <button>Read More..</button>
      </div>
    </div>
  );
};
export default BlogCard;
