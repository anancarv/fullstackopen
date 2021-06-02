import React, { useState, useEffect } from 'react'
import { useQuery  } from '@apollo/client'
import { ALL_BOOKS } from '../queries'

const Books = (props) => {
  const result = useQuery(ALL_BOOKS)
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')

  useEffect(() => {
    if (result.data) {
      const allBooks = result.data.allBooks
      setBooks(allBooks)
      let genres = ['All genres']
      allBooks.forEach((element) => {
        element.genres.forEach((g) => {
          if (genres.indexOf(g) === -1) {
            genres.push(g)
          }
        })
      })
      setGenres(genres)
      setSelectedGenre('All genres')
    }
  }, [result])

  useEffect(() => {
    if (selectedGenre === 'All genres') {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter((b) => b.genres.indexOf(selectedGenre) !== -1)
      )
    }
  }, [books, selectedGenre])

  if (!props.show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>books</h2>
      <p>
        in genre <b>{selectedGenre}</b>
      </p>
      
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {filteredBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {genres.length > 0 &&
          genres.map((g) => (
            <button onClick={() => setSelectedGenre(g)} key={g}>
              {g}
            </button>
          ))}
      </div>
    </div>
  )
}

export default Books