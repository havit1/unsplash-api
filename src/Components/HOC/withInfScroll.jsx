import React from "react";

export function withInfScroll(WrappedComponent, getData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.getData = getData;
      this.populate = this.populate.bind(this);
      this.state = {
        images: [],
        currentPage: 1,
        hasMore: true
      };
    }

    componentDidUpdate(prevProps, prevState) {
      if (
        prevProps.match.params.queryString !==
        this.props.match.params.queryString
      ) {
        this.setImages([]);
        this.getData(
          this.state.currentPage,
          this,
          this.props.match.params.queryString
        );
      }
    }

    setImages(images) {
      this.setState({ images });
    }

    componentDidMount() {
      this.getData(
        this.state.currentPage,
        this,
        this.props.match.params.queryString
      );
      window.addEventListener("scroll", this.populate);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.populate);
    }

    populate = () => {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect()
        .bottom;
      if (windowRelativeBottom < document.documentElement.clientHeight + 1) {
        this.setState({ fething: true });
        this.nextImages();
      }
    };

    nextImages = () => {
      if (!this.state.hasMore) return;

      this.setState(
        state => {
          const newState = Object.assign(state);
          newState.currentPage++;
          return newState;
        },
        () => {
          this.getData(
            this.state.currentPage,
            this,
            this.props.match.params.queryString
          );
        }
      );
    };

    render() {
      return <WrappedComponent {...this.props} images={this.state.images} />;
    }
  };
}
