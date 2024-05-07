import React, { useState } from 'react'
import Square from './Square'

function MainCubeFace({ squaresValues, updatedFrontFaceValues, line, xIsNext, setXIsNext, buttonClicked, enabledAllLineButton} : any) {

    const handleClick = (i:any) =>{
        const newSquares = squaresValues.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
        return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        updatedFrontFaceValues(newSquares)
        setXIsNext(!xIsNext);
        enabledAllLineButton()
    }
    
    const renderSquare = (i:any) => {
        return <Square value={squaresValues[i]} onClick={() => handleClick(i)} />;
      };

    const calculateWinner = (squares:any) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squaresValues);

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className='m-2'>
            <div className="status">{status}</div>
            <div className=''>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(0, 3, 6, squaresValues, "top")} disabled={buttonClicked[0]}>{"^"}</button>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(1, 4, 7, squaresValues, "top")} disabled={buttonClicked[1]}>{"^"}</button>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(2, 5, 8, squaresValues, "top")} disabled={buttonClicked[2]}>{"^"}</button>
            </div>
            <div className="flex">
                <button className="border-2 border-black m-2" onClick={() => line(0, 1, 2, squaresValues, "left")} disabled={buttonClicked[3]}>{"<"}</button>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                <button className="border-2 border-black m-2" onClick={() => line(0, 1, 2, squaresValues, "right")} disabled={buttonClicked[9]}>{">"}</button>
            </div>
            <div className="flex">
                <button className="border-2 border-black m-2" onClick={() => line(3, 4, 5, squaresValues, "left")} disabled={buttonClicked[4]}>{"<"}</button>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                <button className="border-2 border-black m-2" onClick={() => line(3, 4, 5, squaresValues, "right")} disabled={buttonClicked[10]}>{">"}</button>
            </div>
            <div className="flex">
                <button className="border-2 border-black m-2" onClick={() => line(6, 7, 8, squaresValues, "left")} disabled={buttonClicked[5]}>{"<"}</button>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                <button className="border-2 border-black m-2" onClick={() => line(6, 7, 8, squaresValues, "right")} disabled={buttonClicked[11]}>{">"}</button>
            </div>
            <div className=''>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(0, 3, 6, squaresValues, "bottom")} disabled={buttonClicked[6]}>{"v"}</button>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(1, 4, 7, squaresValues, "bottom")} disabled={buttonClicked[7]}>{"v"}</button>
                <button className="border-2 border-black m-2 p-2" onClick={() => line(2, 5, 8, squaresValues, "bottom")} disabled={buttonClicked[8]}>{"v"}</button>
            </div>
        </div>
    )
}

export default MainCubeFace