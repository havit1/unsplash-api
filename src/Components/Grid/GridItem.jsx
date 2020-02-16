import React from "react";
import "./GridItem.scss";

class GridItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      prevSpans: 0,
      spans: 0
    };

    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener("load", this.setSpans);
  }

  render() {
    const { image } = this.props;
    const { spans } = this.state;
    return (
      <div
        className="grid-item"
        style={{
          gridRowEnd: `span ${spans}`
        }}
      >
        <img src={image.urls.regular} alt="" ref={this.imageRef} />
      </div>
    );
  }

  setSpans() {
    const ImageHeight = this.imageRef.current.clientHeight;
    const rawHeight = 50;
    const spans = Math.floor(ImageHeight / rawHeight);
    console.log(spans);

    this.setState({ spans });
  }
}

export default GridItem;
