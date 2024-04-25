import React from 'react'

type SquareProps = {
    // key: string | number
    onClick: any
    value: any
}

const Square = ({ onClick, value } : SquareProps) => {
  return (
    <button className="w-12 h-12 border-2 border-black" onClick={onClick}>
        {value}
    </button>
  )
}

export default Square