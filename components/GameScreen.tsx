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

  const transferLineRight = (a:any ,b:any ,c:any, values:any ) => {
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

  const transferLineLeft = (a:any ,b:any ,c:any, values:any ) => {
    const rememberValues = [...values]

    frontFaceValues[a] = rightFaceValues[a];
    frontFaceValues[b] = rightFaceValues[b];
    frontFaceValues[c] = rightFaceValues[c];
    setFrontFaceValues([...frontFaceValues]);

    rightFaceValues[a] = behindFaceValues[a];
    rightFaceValues[b] = behindFaceValues[b];
    rightFaceValues[c] = behindFaceValues[c];
    setRightFaceValues([...rightFaceValues]);

    behindFaceValues[a] = leftFaceValues[a];
    behindFaceValues[b] = leftFaceValues[b];
    behindFaceValues[c] = leftFaceValues[c];
    setBehindFaceValues([...behindFaceValues]);

    leftFaceValues[a] = rememberValues[a];
    leftFaceValues[b] = rememberValues[b];
    leftFaceValues[c] = rememberValues[c];
    setLeftFaceValues([...leftFaceValues]);
  }

  const transferLineTop = (a:any ,b:any ,c:any, values:any ) => {
    const rememberValues = [...values]

    frontFaceValues[a] = bottomFaceValues[a];
    frontFaceValues[b] = bottomFaceValues[b];
    frontFaceValues[c] = bottomFaceValues[c];
    setFrontFaceValues([...frontFaceValues]);

    bottomFaceValues[a] = behindFaceValues[a];
    bottomFaceValues[b] = behindFaceValues[b];
    bottomFaceValues[c] = behindFaceValues[c];
    setBottomFaceValues([...bottomFaceValues]);

    behindFaceValues[a] = topFaceValues[a];
    behindFaceValues[b] = topFaceValues[b];
    behindFaceValues[c] = topFaceValues[c];
    setBehindFaceValues([...behindFaceValues]);

    topFaceValues[a] = rememberValues[a];
    topFaceValues[b] = rememberValues[b];
    topFaceValues[c] = rememberValues[c];
    setTopFaceValues([...topFaceValues]);
  }

  const transferLineBottom = (a:any ,b:any ,c:any, values:any ) => {
    const rememberValues = [...values]

    frontFaceValues[a] = topFaceValues[a];
    frontFaceValues[b] = topFaceValues[b];
    frontFaceValues[c] = topFaceValues[c];
    setFrontFaceValues([...frontFaceValues]);

    topFaceValues[a] = behindFaceValues[a];
    topFaceValues[b] = behindFaceValues[b];
    topFaceValues[c] = behindFaceValues[c];
    setTopFaceValues([...topFaceValues]);

    behindFaceValues[a] = bottomFaceValues[a];
    behindFaceValues[b] = bottomFaceValues[b];
    behindFaceValues[c] = bottomFaceValues[c];
    setBehindFaceValues([...behindFaceValues]);

    bottomFaceValues[a] = rememberValues[a];
    bottomFaceValues[b] = rememberValues[b];
    bottomFaceValues[c] = rememberValues[c];
    setBottomFaceValues([...bottomFaceValues]);
  }

  const line = (indexOne:any, indexTwo:any, indexThree:any , values:any, direction:string) => {
    if(direction == "right"){
      transferLineRight(indexOne, indexTwo, indexThree, values)
    }else if (direction == "left"){
      transferLineLeft(indexOne, indexTwo, indexThree, values)
    }else if(direction == "top"){
      transferLineTop(indexOne, indexTwo, indexThree, values)
    }else if(direction == "bottom"){
      transferLineBottom(indexOne, indexTwo, indexThree, values)
    }
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