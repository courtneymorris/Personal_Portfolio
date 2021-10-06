import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function () {
  return (
    <div className="contact-page-wrapper">
      <div
        className="left-column-contact"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column-contact">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">(385) 539-4309</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">courtney.morris.shull@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Pleasant Grove, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
