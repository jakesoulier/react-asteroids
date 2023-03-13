import React from "react";
import AsteroidsTitle from "../imgs/AsteroidsTitle-13.png"

const StartScreen = (props) => (
    <div className="StartScreen">
        <img src={AsteroidsTitle} />
        <button onClick={props.onStart}>START GAME</button>
        <section className="topScores">
            <h3>Top Scores</h3>
            <ul>
                <li>1. Yo Momma</li>
                <li>2. Tu Momma</li>
                <li>3. Tu Momma</li>
                <li>4. Tu Momma</li>
            </ul>
        </section>
    </div>
)

export default StartScreen;