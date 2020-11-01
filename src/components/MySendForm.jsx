import React, { Component } from "react";

class MySendForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Comment this article" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ title: event.target.value.replace(/[*]/gi, "") });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Your comments :</label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default MySendForm;