import React from "react";
import profilePhoto from "../../../static/assets/images/bio/profilePhoto.jpg";

export default function () {
  return (
    <div className="about-page-wrapper">
      <div className="left-column">
        <img src={profilePhoto} />
      </div>

      <div className="right-column">
        <div className="about-header">
          <h2>
            ENGINEERS
            <br />
            SOLVE PROBLEMS
          </h2>
          <blockquote>
            Engineers find <strong>inspiration</strong> in problems, and are{" "}
            <em>impassioned</em> by the{" "}
            <strong>drive to find solutions.</strong>
          </blockquote>
        </div>
      </div>

      <div className="about-body">
        <h2>COURTNEY MORRIS-SHULL</h2>
        <p>Certified Full Stack Developer specializing in Python and React</p>
      </div>
    </div>
  );
}
