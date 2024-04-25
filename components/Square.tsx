import React from 'react'

const Square = ({ onClick, value }) => {
  return (
    <button className="w-12 h-12 border-2 border-black" onClick={onClick}>
        {value}
    </button>
  )
}

export default Square