import React, { Component } from 'react'
import Searchbar from 'components/Searchbar/Searchbar'

export default class Image extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
  }

  render() {
    const {items, loading, error} = this.state
    return (
    <>
      <div>Image</div>
      <Searchbar />
    </>
    )
  }
}