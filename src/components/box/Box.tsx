import './Box.css';

interface BoxProps {
  value: string;
  onClick: () => void;
}

const Box = ({ value, onClick }: BoxProps) => {
  const style = value === 'X' ? 'box x' : 'box o';
  return <button className={style} onClick={onClick}>{value}</button>;
};

export default Box;
