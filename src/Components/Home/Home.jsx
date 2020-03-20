import React, { Component } from "react";
import { withInfScroll } from "../HOC/withInfScroll";
import { unsplash } from "../../utils/unsplash";
import { toast } from "react-toastify";
import Grid from "../Grid/Grid";
import { SearchForm } from "../SerachForm";
import { uniqByProp_map } from "../../utils/uniqueValuesOnly";
import "./Home.scss";

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
  }

  render() {
    return (
      <>
        <section>
          <div className="home__page-header">
            <h1>Not Unsplash</h1>
            <div className="home__page-header-input-wrapper">
              <SearchForm />
            </div>
          </div>
        </section>
        <section>
          <Grid images={this.props.images} />
        </section>
      </>
    );
  }
}

async function fetchImages(currentPage, that) {
  try {
    const photos = await unsplash.getMainPagePhotos(currentPage);
    if (!photos.data.length) return that.setState({ hasMore: false });
    const images = that.state.images.concat(photos.data);
    const unifiedImages = uniqByProp_map("id")(images);
    that.setImages(unifiedImages);
  } catch (error) {
    toast.info("No more photos on main page:)");
  }
}

const homeWithScroll = withInfScroll(Home, fetchImages);

export default homeWithScroll;
