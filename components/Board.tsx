"use client"

import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [square, setSquare] = useState("")

    const handleClick = () =>{
        setSquare("X")
    }

    return (
        <Square value={square} onClick={() => handleClick()}/>
    )
}

export default Board