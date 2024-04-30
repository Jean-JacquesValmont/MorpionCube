"use client"

import React, { useState } from 'react'
import MainCubeFace from './MainCubeFace'
import TransitionCubeFace from './TransitionCubeFace'

const GameScreen = () => {
  const [frontFaceValues, setFrontFaceValues] = useState(Array(9).fill(null));
  const [topFaceValues, setTopFaceValues] = useState(Array(9).fill(null));
  const [bottomFaceValues, setBottomFaceValues] = useState(Array(9).fill(null));
  const [leftFaceValues, setLeftFaceValues] = useState(Array(9).fill(null));
  const [rightFaceValues, setRightFaceValues] = useState(Array(9).fill(null));
  const [behindFaceValues, setBehindFaceValues] = useState(Array(9).fill(null));

  const updatedFrontFaceValues = (newSquares : any) => {
    console.log("newSquares: ", newSquares)
    setFrontFaceValues(newSquares);
  }

  const transferLine = (a:any ,b:any ,c:any, values:any ) => {
    const rememberValues = [...values]

    frontFaceValues[a] = leftFaceValues[a];
    frontFaceValues[b] = leftFaceValues[b];
    frontFaceValues[c] = leftFaceValues[c];
    setFrontFaceValues([...frontFaceValues]);

    leftFaceValues[a] = behindFaceValues[a];
    leftFaceValues[b] = behindFaceValues[b];
    leftFaceValues[c] = behindFaceValues[c];
    setLeftFaceValues([...leftFaceValues]);

    behindFaceValues[a] = rightFaceValues[a];
    behindFaceValues[b] = rightFaceValues[b];
    behindFaceValues[c] = rightFaceValues[c];
    setBehindFaceValues([...behindFaceValues]);

    rightFaceValues[a] = rememberValues[a];
    rightFaceValues[b] = rememberValues[b];
    rightFaceValues[c] = rememberValues[c];
    setRightFaceValues([...rightFaceValues]);
  }

  const line = (indexOne:any, indexTwo:any, indexThree:any , values:any) => {
    transferLine(indexOne, indexTwo, indexThree, values)
  }

  return (
    <div className='flex flex-col items-center text-center'>
      <div>
        <TransitionCubeFace squareValues={topFaceValues} nameFace={"Top Face"}/>
      </div>
      <div className='flex'>
        <TransitionCubeFace squareValues={leftFaceValues} nameFace={"Left Face"}/>
        <MainCubeFace squaresValues={frontFaceValues} updatedFrontFaceValues={updatedFrontFaceValues} line={line} />
        <TransitionCubeFace squareValues={rightFaceValues} nameFace={"Right Face"}/>
      </div>
      <div>
        <TransitionCubeFace squareValues={bottomFaceValues} nameFace={"Bottom Face"}/>
      </div>
      <div>
        <TransitionCubeFace squareValues={behindFaceValues} nameFace={"Behind Face"}/>
      </div>
    </div>
    
    
  )
}

export default GameScreen