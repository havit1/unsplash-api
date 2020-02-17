import React, { Component } from "react";
import { withInfScroll } from "../HOC/withInfScroll";
import { unsplash } from "../../utils/unsplash";
import { toast } from "react-toastify";

import Grid from "../Grid/Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid images={this.props.images} />
      </div>
    );
  }
}

async function fetchImages(currentPage, that) {
  try {
    const photos = await unsplash.getMainPagePhotos(currentPage);
    if (!photos.data.length) return that.setState({ hasMore: false });
    const images = that.state.images.concat(photos.data);
    that.setImages(images);
  } catch (error) {
    toast.info("No more photos on main page:)");
  }
}

const homeWithScroll = withInfScroll(Home, fetchImages);

export default homeWithScroll;
