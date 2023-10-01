import React from 'react'

//conditional rendering

function Note({ note }) {
  if(note.important) {
    return (
        <li> ✓ {note.content}</li>
      )
  }
  else{
    return (
        <li> ❌ {note.content}</li>
      )

  }
}

export default Note