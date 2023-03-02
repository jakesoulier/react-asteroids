import React, { useEffect, useState } from "react";
import { StyledAsteroids } from "./styles/StyledAsteroids";
import { Ship } from "../ship";

// const shipSpeed = 2
const friction = 0.99
const acceleration = 0.2

const Asteroids = () => {

    // const [shipPositionX, setShipPositionX] = useState(200)
    const [shipPositionY, setShipPositionY] = useState(200)
    const [shipPositionX, setShipPositionX] = useState(200)
    const [rotationAngle, setRotationAngle] = useState(0)
    const [speed, setSpeed] = useState(2)
    // const [rotating, setRotate] = useState()

    useEffect(() => {
        let timeId;
        timeId = setInterval(() => { // moves the ship forward every 24 milliseconds
            setShipPositionX((shipPositionX) => shipPositionX + Math.sin(rotationAngle) * speed)
            setShipPositionY((shipPositionY) => shipPositionY - Math.cos(rotationAngle) * speed)
            setSpeed((speed) => speed * friction)
            console.log(shipPositionX)
        }, 1)

        // if ship goes beyond bourdry, switch it to the other side
        if (shipPositionY < 0) { // top boundary
            setShipPositionY(450)
        }
        if (shipPositionY > 450) { // bottom boundary
            setShipPositionY(0)
        }
        if (shipPositionX > 450) { // right boundary
            setShipPositionX(0)
        }
        if (shipPositionX < 0) { // left boundary
            setShipPositionX(450)
        }

        return () => {
            clearInterval(timeId)
        }
    })

    const move = ({ keyCode }) => {
        if (keyCode === 87) { // FORWARD 'W' key to go up or forward
            let newSpeed = speed + acceleration
            setSpeed(newSpeed)
        } else if (keyCode === 65) { // LEFT 'A' key to rotate ship counter-clockwise
            let newRotationAngle = rotationAngle - Math.PI / 100 * 5
            setRotationAngle(newRotationAngle)
        } else if  (keyCode === 68) { // RIGHT 'D' key to go right
            let newRotationAngle = rotationAngle + Math.PI / 100 * 5
            setRotationAngle(newRotationAngle)
        }
    }



    return (
        <StyledAsteroids role="button" tabIndex="0"  onKeyDown={e => move(e)} >
            <Ship x={shipPositionX} y={shipPositionY} angle={rotationAngle*180/Math.PI}></Ship>
        </StyledAsteroids>
    )
}

export default Asteroids;

