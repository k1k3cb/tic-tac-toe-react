import { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import ResetButton from './components/reset-button/ResetButton';
import ScoreBoard from './components/score-board/ScoreBoard';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleBoxClick = (boxIndex: number) => {
    if (gameOver) return;
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying ? 'X' : 'O';
      } else {
        return value;
      }
    });

    const winner = checkWinner({ board: updatedBoard });

    if (winner) {
      if (winner === 'X') {
        setScore({ ...score, xScore: score.xScore + 1 });
      } else if (winner === 'O') {
        setScore({ ...score, oScore: score.oScore + 1 });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = ({ board }: { board: string[] }) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
