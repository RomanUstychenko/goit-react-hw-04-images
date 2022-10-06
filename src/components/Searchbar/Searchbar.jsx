import scss from "./Searchbar.module.scss"
import React, { Component } from 'react'
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
      <header className={scss.searchbar}>
  <form 
  className={scss.form}
  onSubmit={handleSubmit}>
    <SubmitBnt 
    text="Search"
    onClick={handleSubmit} 
    />

    <input
      id={searchID}
      className={scss.input}
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






