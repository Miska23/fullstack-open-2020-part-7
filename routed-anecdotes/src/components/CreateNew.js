import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index'

const CreateNew = (props) => {

  const author = useField('text')
  const content = useField('text')
  const url = useField('text')

  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: url.value,
      votes: 0
    })
    history.push('/')
    props.setNotification(
      `You added anecdote:
${content.value}
${author.value}`
    )
    setTimeout(() => {
      props.setNotification('')
    }, 10000)
  }


  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            {...content}
          />
        </div>
        <div>
          author
          <input
            {...author}
          />
        </div>
        <div>
          url for more info
          <input
            {...url}
          />
        </div>
        <button>create</button>
      </form>
      <button onClick={() => {
        author.onChange(undefined, true)
        content.onChange(undefined, true)
        url.onChange(undefined, true)
      }}>
        reset</button>
    </div>
  )
}

export default CreateNew
