import React, { Component } from "react";
import { unsplash } from "../../utils/unsplash";
import { withInfScroll } from "../HOC/withInfScroll";
import { uniqByProp_map } from "../../utils/uniqueValuesOnly";

import Grid from "../Grid/Grid";

class Search extends Component {

  componentDidMount() {
    document.title = `${this.props.match.params.queryString}`
  }


  render() {
    return (
      <section>
        <Grid images={this.props.images} />
      </section>
    );
  }
}

const fetchImages = async (currentPage, that, queryString) => {
  try {
    const photos = await unsplash.getPhotosByQuery(queryString, currentPage);
    if (!photos.data.results.length) return that.setState({ hasMore: false });
    const images = that.state.images.concat(photos.data.results);
    const uniqueImages = uniqByProp_map("id")(images);
    that.setImages(uniqueImages);
  } catch (error) {
    console.error(error);
  }
};

const searchWithScroll = withInfScroll(Search, fetchImages);

export default searchWithScroll;
