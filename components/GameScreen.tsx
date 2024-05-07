"use client"

import React, { useState } from 'react'
import MainCubeFace from './MainCubeFace'
import TransitionCubeFace from './TransitionCubeFace'

const GameScreen = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(Array(12).fill(false))
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

  const transferLine = (a:any ,b:any ,c:any, values:any, firstFace:any, secondFace:any, direction:string ) => {
    const rememberValues = [...values]

    frontFaceValues[a] = firstFace[a];
    frontFaceValues[b] = firstFace[b];
    frontFaceValues[c] = firstFace[c];
    setFrontFaceValues([...frontFaceValues]);

    firstFace[a] = behindFaceValues[a];
    firstFace[b] = behindFaceValues[b];
    firstFace[c] = behindFaceValues[c];

    behindFaceValues[a] = secondFace[a];
    behindFaceValues[b] = secondFace[b];
    behindFaceValues[c] = secondFace[c];
    setBehindFaceValues([...behindFaceValues]);

    secondFace[a] = rememberValues[a];
    secondFace[b] = rememberValues[b];
    secondFace[c] = rememberValues[c];
    
    if(direction == "left"){
      setRightFaceValues([...firstFace]);
      setLeftFaceValues([...secondFace]);
    }else if(direction == "right"){
      setLeftFaceValues([...firstFace]);
      setRightFaceValues([...secondFace]);
    }else if(direction == "top"){
      setBottomFaceValues([...firstFace]);
      setTopFaceValues([...secondFace]);
    }else if(direction == "bottom"){
      setTopFaceValues([...firstFace]);
      setBottomFaceValues([...secondFace]);
    }

    setXIsNext(!xIsNext);
  }

  const enabledAllLineButton = () => {
    for(let i = 0; i < buttonClicked.length; i++){
      buttonClicked[i] = false
    }
  }

  const disabledLineButton = (indexOne:any, direction:string, ) => {
    enabledAllLineButton()

    if(direction == "top" && indexOne == 0){
      buttonClicked[6] = true
    }else if(direction == "top" && indexOne == 1){
      buttonClicked[7] = true
    }else if(direction == "top" && indexOne == 2){
      buttonClicked[8] = true
    }

    if(direction == "left" && indexOne == 0){
      buttonClicked[9] = true
    }else if(direction == "left" && indexOne == 3){
      buttonClicked[10] = true
    }else if(direction == "left" && indexOne == 6){
      buttonClicked[11] = true
    }

    if(direction == "bottom" && indexOne == 0){
      buttonClicked[0] = true
    }else if(direction == "bottom" && indexOne == 1){
      buttonClicked[1] = true
    }else if(direction == "bottom" && indexOne == 2){
      buttonClicked[2] = true
    }

    if(direction == "right" && indexOne == 0){
      buttonClicked[3] = true
    }else if(direction == "right" && indexOne == 3){
      buttonClicked[4] = true
    }else if(direction == "right" && indexOne == 6){
      buttonClicked[5] = true
    }
    setButtonClicked([...buttonClicked])
  }

  const line = (indexOne:any, indexTwo:any, indexThree:any , values:any, direction:string) => {
    if(direction == "right"){
      transferLine (indexOne, indexTwo, indexThree, values, leftFaceValues, rightFaceValues, direction)
    }else if (direction == "left"){
      transferLine (indexOne, indexTwo, indexThree, values, rightFaceValues, leftFaceValues, direction)
    }else if(direction == "top"){
      transferLine (indexOne, indexTwo, indexThree, values, bottomFaceValues, topFaceValues, direction)
    }else if(direction == "bottom"){
      transferLine (indexOne, indexTwo, indexThree, values, topFaceValues, bottomFaceValues, direction)
    }

    disabledLineButton(indexOne, direction)
  }

  return (
    <div className='flex flex-col items-center text-center'>
      <div>
        <TransitionCubeFace squareValues={topFaceValues} nameFace={"Top Face"}/>
      </div>
      <div className='flex'>
        <TransitionCubeFace squareValues={leftFaceValues} nameFace={"Left Face"}/>
        <MainCubeFace 
          squaresValues={frontFaceValues} 
          updatedFrontFaceValues={updatedFrontFaceValues} 
          line={line} 
          xIsNext={xIsNext} 
          setXIsNext={setXIsNext}
          buttonClicked={buttonClicked}
          enabledAllLineButton={enabledAllLineButton} />
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