import React, { useRef, useEffect } from "react";

import { usePlayer } from "../hooks/usePlayer";

const Canvas = () => {
    const canvasRef = useRef(null)
    const [player, updatePlayerPos] = usePlayer()
    const x = 20;
    const Player = (ctx, x) => {
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 4;
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x-20,30)
        ctx.lineTo(x+20, 30)
        ctx.closePath();
        ctx.stroke();
    }
    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 0 });
      }
    const move = ({ keyCode }) => {
        console.log(keyCode)
        if (keyCode === 65) {
            movePlayer(-1);
        } else if (keyCode === 68) {
            movePlayer(1);
        }
    // } else if (keyCode === 40) {
    //   dropPlayer();
    // }
    }
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillStyle = '#000000'
        context.fillRect(0, 0, 500, 500)
        
        Player(context, x)
    }, [Player])

    

    // const movePlayer = dir => {
    //     updatePlayerPos({ x: dir, y: 0 });
    // }
    
    return <canvas ref={canvasRef} role="button" tabIndex="0" onKeyDown={e => move(e)}/>
};

export default Canvas