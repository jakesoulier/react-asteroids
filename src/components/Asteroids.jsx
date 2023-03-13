import React, { useEffect, useState } from "react";
import { StyledAsteroids } from "./styles/StyledAsteroids";
import { Ship } from "./styles/ship";
import { Rock } from "./styles/rock";

const friction = 0.99
const acceleration = 1
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const Asteroids = ({ onEnd }) => {
    
    // ship positioning change
    const [shipPositionY, setShipPositionY] = useState(screenHeight/2)
    const [shipPositionX, setShipPositionX] = useState(screenWidth/2)
    const [rotationAngle, setRotationAngle] = useState(0)
    const [speed, setSpeed] = useState(2)

    // rocks
    // const [rocks, setRocks] = useState([])

    useEffect(() => {

        let timeId;
        timeId = setInterval(() => { // moves the ship forward every 24 milliseconds - friction
            setShipPositionX((shipPositionX) => shipPositionX + Math.sin(rotationAngle) * speed)
            setShipPositionY((shipPositionY) => shipPositionY - Math.cos(rotationAngle) * speed)
            setSpeed((speed) => speed * friction)
        }, 1)

        // if ship goes beyond bourdry, switch it to the other side
        if (shipPositionY < 0) { // top boundary
            setShipPositionY(screenHeight)
        }
        if (shipPositionY > screenHeight) { // bottom boundary
            setShipPositionY(0)
        }
        if (shipPositionX > screenWidth) { // right boundary
            setShipPositionX(0)
        }
        if (shipPositionX < 0) { // left boundary
            setShipPositionX(screenWidth)
        }

        // create rocks every 3 seconds
        // const createRocks = () => {
        //     const newRock = new Rock(
        //     Math.random() * screenWidth,
        //     Math.random() * screenHeight,
        //     Math.random() * 50 + 20
        //     );
        //     setRocks((rocks) => [...rocks, newRock]);
        // };
        // setInterval(createRocks, 3000);

        const handleKeyDown = ({ keyCode }) => {
            if (keyCode === 87) {
              let newSpeed = speed + acceleration;
              setSpeed(newSpeed);
            } else if (keyCode === 65) {
              let newRotationAngle = rotationAngle - (Math.PI / 100) * 5;
              setRotationAngle(newRotationAngle);
            } else if (keyCode === 68) {
              let newRotationAngle = rotationAngle + (Math.PI / 100) * 5;
              setRotationAngle(newRotationAngle);
            }
        };
      
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            clearInterval(timeId);
            window.removeEventListener("keydown", handleKeyDown);
            // onEnd();
        }
    })    

    return (
        <StyledAsteroids id="styled-background" role="button" tabIndex="0"  >
            {/* {rocks.map((rock, index) => (
                <Rock key={index} x={rock.x} y={rock.y} size={rock.size} />
            ))} */}
            {/* <Rock /> */}
            <Ship x={shipPositionX} y={shipPositionY} angle={rotationAngle*180/Math.PI}></Ship>
        </StyledAsteroids>
    )
}

export default Asteroids;

