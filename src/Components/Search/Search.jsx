import React, { Component } from "react";
import { unsplash } from "../../utils/unsplash";
import { withInfScroll } from "../HOC/withInfScroll";

import Grid from "../Grid/Grid";

class Search extends Component {
  render() {
    return (
      <>
        <Grid images={this.props.images} />
      </>
    );
  }
}

const fetchImages = async (currentPage, that, queryString) => {
  try {
    const photos = await unsplash.getPhotosByQuery(queryString, currentPage);
    if (!photos.data.results.length) return that.setState({ hasMore: false });
    const images = that.state.images.concat(photos.data.results);

    that.setImages(images);
  } catch (error) {
    console.error(error);
  }
};

const searchWithScroll = withInfScroll(Search, fetchImages);

export default searchWithScroll;
