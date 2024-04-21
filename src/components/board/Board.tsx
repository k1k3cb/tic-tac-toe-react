import Box from '../box/Box';
import './Board.css';
interface BoardProps {
  board: string[];
  onClick: (index: number) => void;
}

const Board = ({ board, onClick }: BoardProps) => {
  return (
    <div className='board'>
      {board.map((value, index) => (
        <Box
          key={index}
          value={value}
          onClick={() => value === null && onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
