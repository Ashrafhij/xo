import { useState } from "react"


function Square({onClick,value}){
  return <button onClick={onClick} className="square"> {value} </button>
}

export default function Board(){
  const [xisNext,setxisNext] = useState(true)
  const [squares,setsquares] = useState(Array(9).fill(null))
  const [winner,setWinner] = useState('')

  function handleClick(i){
    if(calculateWinner(squares)){
      setWinner(calculateWinner(squares))
      return;
    }
    const tempSquares = squares.slice();
    if (tempSquares[i] == null) {
      if (xisNext) {
        tempSquares[i] = 'X'
        setxisNext(false);
      } else {
        tempSquares[i] = 'O'
        setxisNext(true);
      }
    }
    setsquares(tempSquares)
  }

  return <>
  <div className="board-row">
  <Square onClick={()=>handleClick(0)} value={squares[0]}></Square>
  <Square onClick={()=>handleClick(1)} value={squares[1]}></Square>
  <Square onClick={()=>handleClick(2)} value={squares[2]}></Square>
  </div>
  <div className="board-row">
  <Square onClick={()=>handleClick(3)} value={squares[3]}></Square>
  <Square onClick={()=>handleClick(4)} value={squares[4]}></Square>
  <Square onClick={()=>handleClick(5)} value={squares[5]}></Square>
  </div>
  <div className="board-row">
  <Square onClick={()=>handleClick(6)} value={squares[6]}></Square>
  <Square onClick={()=>handleClick(7)} value={squares[7]}></Square>
  <Square onClick={()=>handleClick(8)} value={squares[8]}></Square>
  </div>
  <text>Winner is {winner}</text>
  </>
}

function calculateWinner(squares) {
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
}