import React, { useState, useEffect } from 'react'
import BookItem, { Book } from './BookItem'

export default function () {
    const [books, setBooks] = useState([])

    const fetchData = () => {
        try {
            fetch('http://localhost:4730/books')
                .then((response) => response.json())
                .then((books) => {
                    setBooks(books)
                })
        } catch (error) {
            console.log('error fetching books', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="book-list">
            {books.map((book: Book) => {
                return <BookItem key={book.isbn} {...book} />
            })}
        </div>
    )
}
