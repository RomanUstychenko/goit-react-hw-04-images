import scss from "./Searchbar.module.scss"

import React, { Component } from 'react'

export default class Searchbar extends Component {
  state = {
    search: "",
  }
  render() {
    const {search} = this.state
    return (
      <header className="searchbar">
  <form 
  class="form"
  onSubmit="handleSubmit">
    <button 
    type="submit" 
    className="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }
}






