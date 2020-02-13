import React, { Component } from "react";
import Request from "../../utils/request";
import Grid from "../Grid/Grid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentPage: 1
    };
  }

  setImages(images) {
    this.setState({ images });
  }

  fetchImages() {
    const request = new Request();

    request.get(
      `https://api.unsplash.com/photos?page=${this.state.currentPage}`,
      imagesJSON => {
        const images = this.state.images.concat(JSON.parse(imagesJSON));
        this.setImages(images);
      },
      e => {
        console.log(e);
      },
      {
        Authorization:
          "Client-ID 1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8"
      }
    );
  }

  componentDidMount() {
    this.fetchImages();
    window.addEventListener("scroll", this.populate);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.populate);
  }

  nextImages = () => {
    this.setState(
      state => {
        const newState = Object.assign(state);
        newState.currentPage++;
        return newState;
      },
      () => {
        this.fetchImages();
      }
    );
  };

  populate = () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect()
      .bottom;
    if (windowRelativeBottom < document.documentElement.clientHeight + 1) {
      this.nextImages();
    }
  };

  render() {
    return (
      <div>
        <Grid images={this.state.images} />
      </div>
    );
  }
}

export default Home;
