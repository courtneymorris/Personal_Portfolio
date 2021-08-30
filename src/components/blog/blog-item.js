import React from "react";

export default function BlogItem(props) {
  const { id, blog_status, content, title, featured_image_url } =
    props.blogItem;

  return (
    <div className="blog-item-wrapper">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
}
