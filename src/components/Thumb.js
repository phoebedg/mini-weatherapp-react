import React from "react";

class Thumb extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { href } = event.target;
    this.props.receiver(href);
  }
  render() {
    return (
      <a
        className="thumbs__link"
        href={this.props.image.regular}
        key={this.props.image.thumb}
        onClick={this.handleClick}
      >
        <img className="thumbs__link__img" src={this.props.image.thumb} />
      </a>
    );
  }
}

export default Thumb;
