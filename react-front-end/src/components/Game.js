import React, { useRef, useEffect } from "react";
import phaserGame from "../game/intro";

import state from "../useState";
import Leaderboard from "./Leaderboard";


let game;
export default function Game() {
  const canvasRef = useRef();
  useEffect(() => {
    console.log("canvasRef", canvasRef.current)
  }, [])

  game = new phaserGame();  
  return (

    <body>
      <div id="wrapper">
        <video id="camera" width="320" height="240" autoplay="true"></video>
        <canvas ref={canvasRef} id="overlay" width="320" height="240"></canvas>
      </div>
      <div id="phaser-example">{game.score}</div>
    </body>
  )
}