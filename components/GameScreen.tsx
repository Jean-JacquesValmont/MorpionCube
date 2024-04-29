"use client"

import React, { useState} from 'react'
import MainCubeFace from './MainCubeFace'
import TransitionCubeFace from './TransitionCubeFace'

const GameScreen = () => {
  const [transferredValues, setTransferredValues] = useState(Array(9).fill(null));

  const transferValues = (values:any) => {
    setTransferredValues(values);
  };

  return (
    <div className='flex'>
      <MainCubeFace transferValues={transferValues}/>
      <TransitionCubeFace transferredValues={transferredValues}/>
    </div>
    
  )
}

export default GameScreen