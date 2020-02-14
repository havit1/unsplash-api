import React, { Component } from "react";
import { withInfScroll } from "../HOC/withInfScroll";
import { unsplash } from "../../utils/unsplash";

import Grid from "../Grid/Grid";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid images={this.props.images} />
      </div>
    );
  }
}

async function fetchImages(currentPage, that) {
  const photos = await unsplash.getMainPagePhotos(currentPage);
  if (!photos.data.length) return that.setState({ hasMore: false });
  const images = that.state.images.concat(photos.data);
  that.setImages(images);
}

const homeWithScroll = withInfScroll(Home, fetchImages);

export default homeWithScroll;
