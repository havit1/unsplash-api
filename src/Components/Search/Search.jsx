import React, { Component } from "react";
import Request from "../../utils/request";
import Grid from "../Grid/Grid";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentPage: 1,
      isFetching: true
    };

    this.imageRef = React.createRef("div");
  }

  fetchImages = () => {
    this.setState({ isFetching: true });
    const request = new Request();
    request.get(
      `https://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&page=${this.state.currentPage}&client_id=1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8`,
      responseJSON => {
        const response = JSON.parse(responseJSON);
        if (response.results) {
          const images = this.state.images.concat(response.results);
          this.setImages(images);
          this.setState({ isFetching: false });
        } else {
          console.error("response is empty", responseJSON);
        }
      },
      e => {
        throw new Error(e);
      }
    );
  };

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    this.nextImages();
  };

  // populate = () => {
  //   let windowRelativeBottom = document.documentElement.getBoundingClientRect()
  //     .bottom;
  //   if (windowRelativeBottom < document.documentElement.clientHeight + 1) {
  //     this.nextImages();
  //   }
  // };

  componentDidMount() {
    this.fetchImages();
    // window.addEventListener("scroll", this.handleScroll);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  nextImages = () => {
    console.log("test");

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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.queryString !== this.props.match.params.queryString
    ) {
      this.setImages([]);
      console.log("Fetching");
      this.fetchImages();
    }
  }

  setImages(images) {
    this.setState({ images });
  }

  render() {
    return (
      <>
        <Grid imageRef={this.imageRef} images={this.state.images} />
        <button onClick={() => this.nextImages()}>More</button>
      </>
    );
  }
}

export default Search;
