import React from "react";

interface TileProps {
  className?: string;
  player: string;
  index: number;
  value: string;
  handleTileClick: (index: number) => void;
  disabled?: boolean;
}

const Tile = ({
  className = "",
  player,
  index,
  value,
  handleTileClick,
  disabled,
}: TileProps) => {
  return (
    <div
      className={`flex items-center justify-center ${className} ${
        value === null &&
        !disabled &&
        "hover:after:content-['" + player + "'] hover:after:opacity-45"
      }
        
      text-lg font-bold ${!disabled && "cursor-pointer"}`}
      onClick={() => {
        if (!disabled) handleTileClick(index);
      }}
    >
      {value}
    </div>
  );
};

export default Tile;
