import './ScoreBoard.css';

interface ScoreBoardProps {
  score: {
    xScore: number;
    oScore: number;
  };
  xPlaying: boolean;
}

const ScoreBoard = ({ score, xPlaying }: ScoreBoardProps) => {
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        X - {score.xScore}
      </span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>
        O - {score.oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
