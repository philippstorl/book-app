import React from 'react'

export interface Book {
    title: string
    subtitle: string
    isbn: string
    abstract: string
    numPages: number
    author: string
    publisher?: {
        name: string
        url?: string
    }
    cover: string
}

export default function ({ title, subtitle, author }: Book) {
    return (
        <div className="list-item">
            <a href="#">{title}</a>
            <div>
                {subtitle} von {author}
            </div>
        </div>
    )
}
