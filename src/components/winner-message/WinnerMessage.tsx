import './WinnerMessage.css';

interface WinnerMessageProps {
  playerWins: string | null;
}

const WinnerMessage = ({ playerWins }: WinnerMessageProps) => {
  let playerClass = '';
  if (playerWins === 'X') {
    playerClass = 'player-x';
  } else if (playerWins === 'O') {
    playerClass = 'player-o';
  }
  return (
    <div className='winner-message'>
      {playerWins && (
        <p className={playerClass}>{`¡Player ${playerWins} wins!`}</p>
      )}
    </div>
  );
};

export default WinnerMessage;
