// import  { Component } from 'react'
// import  { useState } from 'react'

// import Loader from 'components/Loader/Loader';
// // import { fetch } from 'components/API/fetch';
// import { getImage } from 'components/API/fetch';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import {Button} from "components/Button/Button"
 
// import React from 'react'

// export default function ImageFinder() {

//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [page, setPage] = useState(1);
//     const [query, setQuery] = useState("");

   
//    const fetchImage = async () => {
//     setLoading(true)

// try {
//     const data = await getImage(page)
//     setItems((items) => {
//         return [...items, ...data.hits]
//             })
//     //     this.setState (({items}) => {
//     // return {
//     //     items: [...items, ...data.hits]
//     //         }
//     //     })
 
// } catch (error) {
//     setError(error)
//     // this.setState({
//     //             error
//     //         })
// }
// finally {
//     setLoading(false)
//     // this.setState ({
//     //             loading: false,
//     //         })
// }
// };
// const LoadMore = () => {
//     setPage((prev) => prev +1)
// }
//     const isImage = Boolean(items.length);
//     return (
//         <div>
//           {loading && <Loader />}
//           {error && <p>Помилка</p>}
//           {isImage && <ImageGallery items={items}/>}
//           {isImage && <Button onClick={LoadMore} />}
//         </div>
//       )
// }


// export default class ImageFinder extends Component {

//     state = {
//         items: [],
//         loading: false,
//         error: null,
//         page: 1,
//         query: "",
//     };

//     componentDidMount() {
//         this.fetchImage();
//     };
//     componentDidUpdate(__, prevState) {
//         const {page} = this.state;
//         if (prevState.page !== page) {
//             this.fetchImage();
//         }
//     }


// async fetchImage()  {
//         const {query, page} = this.state;
// this.setState ({
//     loading: true,
// })

// try {
//     const data = await getImage( page)
//         this.setState (({items}) => {
//     return {
//         items: [...items, ...data.hits]
//             }
//         })
//     // }
//     // )
// } catch (error) {
//     this.setState({
//                 error
//             })
// }
// finally {
//     this.setState ({
//                 loading: false,
//             })
// }
// };
// LoadMore = () => {
//     this.setState (({page}) => {
//         return {
//             page: page + 1
//         }
//     })
// }
//   render() {
//     const {items, loading, error } = this.state;
//     const isImage = Boolean(items.length);
//     return (
//       <div>
//         {loading && <Loader />}
//         {error && <p>Помилка</p>}
//         {isImage && <ImageGallery items={items}/>}
//         {isImage && <Button onClick={this.LoadMore} />}
//       </div>
//     )
//   }
// }
