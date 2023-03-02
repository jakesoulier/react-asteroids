import { useState } from "react";

export const usePlayer = () => {
    const {player, setPlayer} = useState({pos: {x:0,y:0}});

    const updatePlayerPos = ({ x, y }) => {
        setPlayer(prev => ({
          ...prev,
          pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
        }))
      }

    return [player, updatePlayerPos]
}

