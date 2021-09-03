import React from "react";

export default function BlogFeaturedImage(props) {
  if (!props.img) {
    return null;
  }

  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
}
