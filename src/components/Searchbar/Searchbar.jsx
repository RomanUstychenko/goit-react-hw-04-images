import scss from "./Searchbar.module.scss"
// import React, { Component } from 'react'
import  { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from "nanoid"
import { SubmitBnt } from 'components/Button/Button'
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function Searchbar({onSubmit}) {

const [searchImg, setSearchImg] = useState('');

const searchID = nanoid();

const searchField = {
  label: "SearchImg",
  type: "text",
  name: "searchImg",
  placeholder: "Search images and photossssss",
  required: true,
}
 const handleChange = (e) => {
const {value} = e.target;
console.log(value)
setSearchImg(value.toLowerCase())
console.log('search', searchImg)
  };

 const handleSubmit = (e) => {
  console.log(e)
    e.preventDefault()
    if (searchImg.trim() === '') {
      return  console.log('Please, enter query.');
    }
    onSubmit(searchImg);
    reset();
  };
 const reset = () => {
    setSearchImg('')
    };

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
    value={searchImg}
    onChange={handleChange}
    // label='Search'
    // type='text'
    // name='search'
    // placeholder='Search images and photos'
    // required={true}
    {...searchField}
    autocomplete="off"
    autofocus
  />
</form>
</header>
  )
}


// export default class Searchbar extends Component {
//   state = {
//     search: '',
//   }
//   searchID = nanoid();

// searchField = {
//   label: "Search",
//   type: "text",
//   name: "search",
//   placeholder: "Search images and photos",
//   required: true,
// }
//   handleChange = (e) => {
// const {value, name } = e.target;
// this.setState ({
//   [name]: value
// })
//   };

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const {onSubmit} = this.props;
//     onSubmit({...this.state});
//     this.reset();
//   };
//   reset () {
//     this.setState ({
//       search: '',
//     })
//     };
  
 
//   render() {
//     const {search} = this.state;
//     const {searchID, handleChange, handleSubmit} = this;
//     return (
//       <header className={scss.Searchbar}>
//   <form 
//   className={scss.SearchForm}
//   onSubmit={handleSubmit}>
//     <SubmitBnt 
//     text="Search"
//     onClick={handleSubmit} 
//     />
//     <input
//       id={searchID}
//       className={scss.SearchFormInput}
//       value={search}
//       onChange={handleChange}
//       {...this.searchField}
//       autocomplete="off"
//       autofocus
//     />
//   </form>
// </header>
//     )
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};






