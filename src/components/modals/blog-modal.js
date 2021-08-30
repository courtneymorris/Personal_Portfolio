import React, { Component } from "react";
import ReactModal from "react-modal";

export default class BlogModal extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="">
        <ReactModal isOpen={true}>
          <h1>I'm in a modal</h1>
        </ReactModal>
      </div>
    );
  }
}
