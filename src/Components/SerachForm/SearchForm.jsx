import React, { Component } from "react";
import "./SearchForm.scss";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      searchValue: ""
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (!this.state.searchValue) {
      return;
    }
    this.props.history.push(`/search/${this.state.searchValue}`);
  }

  onChange = e => {
    const searchValue = e.currentTarget.value;
    this.setState({ searchValue });
  };

  render() {
    return (
      <form className={"search-form"} onSubmit={this.submitForm}>
        <button className="search-form__button">S</button>
        <input
          onChange={this.onChange}
          value={this.state.searchValue}
          type="text"
          placeholder="Search..."
          className="search-form__input"
        />
      </form>
    );
  }
}

const SearchFormWithRouter = withRouter(SearchForm);
export { SearchFormWithRouter as SearchForm };
