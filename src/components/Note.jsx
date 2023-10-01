import React from 'react'

//conditional rendering

function Note({ note }) {
  
    return (
        <li>
            {note.important && '✅'} {note.important || '❌'}{ note. content } 
        </li>
      )
  
}

export default Note