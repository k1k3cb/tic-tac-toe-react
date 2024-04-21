import './ResetButton.css';

interface ResetButtonProps {
  resetBoard: () => void;
}
const ResetButton = ({ resetBoard }: ResetButtonProps) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>
      Reset{' '}
    </button>
  );
};

export default ResetButton;
