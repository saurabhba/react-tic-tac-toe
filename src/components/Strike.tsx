interface StrikeProps {
  className?: string;
}

const Strike = ({ className }: StrikeProps) => {
  return <div className={`absolute bg-orange-600  ${className}`}></div>;
};

export default Strike;
