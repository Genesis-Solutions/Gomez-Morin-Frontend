import React from 'react'

const TextButton = ({ text, link }) => {
  return (
    
      <a href={link}>
        { text }
      </a>
    
  )
}

export default TextButton