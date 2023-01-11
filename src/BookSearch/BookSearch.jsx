import React, { useEffect } from "react";
import { useState } from "react";
import "./BookSearch.css";
// import _ from "lodash"
import Search from './images/search.png'
const BookSearch = () => {
    const [mouseHover, setmouseHover] = useState(false)
    const [BookData, setBookData] = useState([])
    async function BookSearch(e) {
        e.preventDefault()
        const search = e.target.value;
        // useEffect(() => {
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`).then((data) => {
            return data.json()
        }).then(data => {
            let books = {
                title: data.items[0].volumeInfo.title,
                Author: data.items[0].volumeInfo.authors,
                image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
                rating: data.items[0].volumeInfo.averageRating,
                PageCount: data.items[0].volumeInfo.pageCount,
                infoLink: data.items[0].volumeInfo.infoLink
            }
            setBookData([books])
            // console.log(books.title)
            console.log(books)
            // console.log(books.image)
        })
        // })
    }
    return (
        <>

            <div id="main-container">
                <div id="heading"><h1>BOOK SEARCH</h1></div>
                <div>
                    <span>
                        <input type={"text"} placeholder="Search for a book" id="book-search" onChange={(e) => BookSearch(e)} />
                    </span>
                    <span>
                        <img src={Search} alt="search" id="search" />
                    </span>
                </div>
                <div>
                    {BookData.map((item, i) => {
                        return (
                            <>
                                <div key={i} onClick={() => window.open(item.infoLink, "_blank")} onMouseEnter={() => { setmouseHover(true) }}
                                    onMouseLeave={() => { setmouseHover(false) }}>
                                    {mouseHover ?
                                        <div>
                                            <h3>{item.title}</h3>
                                            <h3>{item.Author.join(',')}</h3>
                                            <h3>{item.rating}</h3>
                                            <h3>{item.PageCount}</h3>

                                        </div> : <img style={{ backgraoundImage: "url({item.image})" }} src={item.image} alt="Cover Image" />
                                    }

                                </div>
                            </>
                        )
                    })}
                </div>


            </div>

        </>
    )

}
export default BookSearch