import scss from "./Searchbar.module.scss"
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from "nanoid"
import { SubmitBnt } from 'components/Button/Button'

export default class Searchbar extends Component {
  state = {
    search: '',
  }
  searchID = nanoid();

searchField = {
  label: "Search",
  type: "text",
  name: "search",
  placeholder: "Search images and photos",
  required: true,
}
  handleChange = (e) => {
const {value, name } = e.target;
this.setState ({
  [name]: value
})
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const {onSubmit} = this.props;
    onSubmit({...this.state});
    this.reset();
  };
  reset () {
    this.setState ({
      search: '',
    })
    };
  
 
  render() {
    const {search} = this.state;
    const {searchID, handleChange, handleSubmit} = this;
    return (
      <header className={scss.Searchbar}>
  <form 
  className={scss.SearchForm}
  onSubmit={handleSubmit}>
    <SubmitBnt 
    text="Search"
    onClick={handleSubmit} 
    />

    <input
      id={searchID}
      className={scss.SearchFormInput}
      value={search}
      onChange={handleChange}
      {...this.searchField}
      autocomplete="off"
      autofocus
    />
  </form>
</header>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};






