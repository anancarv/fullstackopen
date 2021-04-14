import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import Select from 'react-select'

import { EDIT_BORN_YEAR, ALL_AUTHORS } from '../queries'


const BornYearForm = ({notify, allAuthors}) => {
  const [nameOptions, setNameOptions] = useState(null)
  const [setBornTo, setBornYear] = useState('')

  const [ changeBornYear, result ] = useMutation(EDIT_BORN_YEAR, {
    refetchQueries: [ 
        { query: ALL_AUTHORS } 
      ]
  })

  const options = []
  allAuthors.forEach(author => options.push(
      {
        value: author.name,
        label: author.name
    }))
  
  const submit = (event) => {
    event.preventDefault()

    const name = nameOptions.value

    changeBornYear({ variables: { name, setBornTo } })
    setNameOptions('')
    setBornYear('')
  }

  useEffect(() => {    
      if (result.data && result.data.editAuthor === null) {      
          notify('Author not found')    
        }  
    }, [result.data])  // eslint-disable-line 

  return (
    <div>
      <h2>Set birthyear</h2>

      <form onSubmit={submit}>
        <div>
          <Select
            value={nameOptions}
            onChange={setNameOptions}
            options={options}
          />
        </div>
        <div>
          born <input
            value={setBornTo}
            onChange={({ target }) => setBornYear(parseInt(target.value))}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default BornYearForm