import React from 'react'
import Square from './Square'

function TransitionCubeFace({ transferredValues } :any) {

    return (
    <div className='m-2'>
        <h2>Secondary Face</h2>
        <div className="flex">
            <Square key={0} value={transferredValues[0]} onClick={null}/>
            <Square key={1} value={transferredValues[1]} onClick={null}/>
            <Square key={2} value={transferredValues[2]} onClick={null}/>
            </div>
        <div className="flex">
            <Square key={3} value={transferredValues[3]} onClick={null}/>
            <Square key={4} value={transferredValues[4]} onClick={null}/>
            <Square key={5} value={transferredValues[5]} onClick={null}/>
        </div>
        <div className="flex">
            <Square key={6} value={transferredValues[6]} onClick={null}/>
            <Square key={7} value={transferredValues[7]} onClick={null}/>
            <Square key={8} value={transferredValues[8]} onClick={null}/>
        </div>
    </div>
  );
};

export default TransitionCubeFace