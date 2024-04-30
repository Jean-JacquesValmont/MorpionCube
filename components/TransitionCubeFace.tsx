import React from 'react'
import Square from './Square'

function TransitionCubeFace({ squareValues, nameFace } :any) {

    return (
    <div className='m-2'>
        <h2>{nameFace}</h2>
        <div className="flex">
            <Square key={0} value={squareValues[0]} onClick={null}/>
            <Square key={1} value={squareValues[1]} onClick={null}/>
            <Square key={2} value={squareValues[2]} onClick={null}/>
            </div>
        <div className="flex">
            <Square key={3} value={squareValues[3]} onClick={null}/>
            <Square key={4} value={squareValues[4]} onClick={null}/>
            <Square key={5} value={squareValues[5]} onClick={null}/>
        </div>
        <div className="flex">
            <Square key={6} value={squareValues[6]} onClick={null}/>
            <Square key={7} value={squareValues[7]} onClick={null}/>
            <Square key={8} value={squareValues[8]} onClick={null}/>
        </div>
    </div>
  );
};

export default TransitionCubeFace