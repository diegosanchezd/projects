import { useState } from 'react'
import './App.css'
import Square from './components/Square'

const TURNS = {
  X: "x",
  O: "o"
}

const initialBoard = Array(9).fill(null)

function App() {

  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  //______LOGICA DE TURNOS_____
  const updateBoard = (index) => {

    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  //________LOGICA DE WINNER________

  const winnerCombos= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = (boardToCheck)=>{
    for(const combo of winnerCombos){
      const [a, b, c] = combo;
      if(boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }



  //________RENDERIZADO_________
  return (
    <>
      <main className='board'>
      <h3>Tic Tac Toe</h3>
        <section className='game'>
          {board.map((cell, index)=>{
            return(
             <Square 
                key={index}
                updateBoard={updateBoard}
                index={index} 
                children={cell}>
                  
                </Square>
            )
          })}
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X} children={"x"}/>
          <Square isSelected={turn === TURNS.O} children={"o"}/>
        </section>
      </main>
    </>    
  )
}

export default App
