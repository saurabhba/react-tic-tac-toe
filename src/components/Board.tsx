"use client";
import React, { use, useEffect, useState } from "react";
import Tile from "./Tile";
import Strike from "./Strike";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombos = [
  { combo: [0, 1, 2], strikeClass: "w-full h-1 top-[15%]" },
  { combo: [3, 4, 5], strikeClass: "w-full h-1 top-[48%]" },
  { combo: [6, 7, 8], strikeClass: "w-full h-1 top-[83%]" },
  { combo: [0, 3, 6], strikeClass: "h-full w-1 left-[15%]" },
  { combo: [1, 4, 7], strikeClass: "h-full w-1 left-[48%]" },
  { combo: [2, 5, 8], strikeClass: "h-full w-1 left-[83%]" },
  {
    combo: [0, 4, 8],
    strikeClass: "h-1 w-[90%] top-[50%] left-[5%] skew-y-[45deg]",
  },
  {
    combo: [2, 4, 6],
    strikeClass: "h-1 w-[90%] top-[50%] left-[5%] -skew-y-[45deg]",
  },
];

const Board = () => {
  const [player, setPlayer] = useState(PLAYER_X);
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const handleTileClick = (index: number) => {
    if (tiles[index] !== null) return;

    setTiles((prevTiles) => {
      const newTiles = [...prevTiles];
      newTiles[index] = player;
      return newTiles;
    });

    setPlayer((prevPlayer) => (prevPlayer === PLAYER_X ? PLAYER_O : PLAYER_X));
  };

  useEffect(() => {
    for (const { combo, strikeClass } of winningCombos) {
      const [a, b, c] = combo;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrikeClass(strikeClass);
        setDisabled(true);
      }
    }

    if (tiles.every((tile) => tile !== null)) {
      alert("It's a draw!");
      setDisabled(true);
    }
  }, [tiles]);

  const [strikeClass, setStrikeClass] = useState("");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex justify-center flex-col space-y-8">
      <div className="grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] relative">
        <Tile
          className="border-r-4 border-b-4 border-indigo-300"
          player={player}
          index={0}
          value={tiles[0]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-r-4 border-b-4 border-indigo-300"
          player={player}
          index={1}
          value={tiles[1]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-b-4 border-indigo-300"
          player={player}
          index={2}
          value={tiles[2]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-r-4 border-b-4 border-indigo-300"
          player={player}
          index={3}
          value={tiles[3]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-r-4 border-b-4 border-indigo-300"
          player={player}
          index={4}
          value={tiles[4]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-b-4 border-indigo-300"
          player={player}
          index={5}
          value={tiles[5]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-r-4 border-indigo-300"
          player={player}
          index={6}
          value={tiles[6]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          className="border-r-4 border-indigo-300"
          player={player}
          index={7}
          value={tiles[7]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Tile
          player={player}
          index={8}
          value={tiles[8]}
          handleTileClick={handleTileClick}
          disabled={disabled}
        />
        <Strike className={strikeClass} />
      </div>
      <button
        className="mt-4 p-2 bg-indigo-500 text-white rounded-md"
        onClick={() => {
          setTiles(Array(9).fill(null));
          setPlayer(PLAYER_X);
          setStrikeClass("");
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default Board;
