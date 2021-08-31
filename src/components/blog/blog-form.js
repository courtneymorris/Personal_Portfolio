import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" />
        <input type="text" />

        <button>Save</button>
      </form>
    );
  }
}
