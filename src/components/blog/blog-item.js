import React from "react";
import { Link } from "react-router-dom";

export default function BlogItem(props) {
  const { id, blog_status, content, title, featured_image_url } =
    props.blogItem;

  return (
    <div className="blog-item-wrapper">
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>{content}</div>
    </div>
  );
}
