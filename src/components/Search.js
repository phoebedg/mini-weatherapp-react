import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.location);
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    return (
      <div className="controls">
        <form className="search" onSubmit={this.handleSubmit}>
          <label className="search__label">
            <input
              className="search__input"
              onChange={this.handleChange}
              value={this.state.location}
            />
            <button className="btn">Search</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
