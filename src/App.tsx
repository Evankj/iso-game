import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IsoGrid } from './game/engine/IsoGrid';
import { Tile } from './components/tiles/Tile'
import { log } from 'console';
let sprites: string[] = [];


function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const gridSquareSize = { width: 64, height: 128 };
  const gridWidth = 5;
  const gridHeight = 5;
  const gridLevels = 1;
  const test =
    [ // Z
      [ // Y
        [], // X
        []  // X
      ],// Y
      [ // Y
        [], // X
        []  // X
      ] // Y
    ] // Z

  // 4D grid
  // First dimension is height/level of proceeding grid
  // I.e. an array of two dimensional arrays
  // Last dimension is rendering order for multiple sprites at same x/y
  let cartesianGrid: number[][][][] = new Array(gridLevels);
  for (let level = 0; level < gridLevels; level++) {
    cartesianGrid[level] = new Array(gridHeight);
    for (let row = 0; row < gridHeight; row++) {
      cartesianGrid[level][row] = new Array(gridWidth);
      for (let col = 0; col < gridWidth; col++) {
        cartesianGrid[level][row][col] = [0, Math.floor(Math.random() * 2 + 1), Math.floor(Math.random() * 2 + 2)];

      }
    }
  }


  const isoGrid = new IsoGrid(cartesianGrid, width, height, gridSquareSize);

  return (
    <div className="App">
      <>
        {isoGrid.cartesianGrid.map((level: number[][][], z: number) => {
          console.log(level);

          return level.map((row: number[][], y: number) => {

            return (
              row.map((objects: number[], x: number) => {
                const screenPos = isoGrid.convertFromCartesianToScreenSpace(x, y, z);
                return objects.map((val, buffer) => {
                let sprite = '';
                switch (val) {
                  case 0:
                    sprite = require('./game/assets/sprites/floor_E.png');
                    break;
                  case 1:
                    sprite = require('./game/assets/sprites/wall_E.png');
                    break;
                  case 2:
                    sprite = require('./game/assets/sprites/wall_S.png');
                    break;
                  case 3:
                    sprite = require('./game/assets/sprites/wall_N.png');
                    break;
                  case 4:
                    sprite = require('./game/assets/sprites/wall_W.png');
                    break;
                }
                return <Tile
                  x={screenPos.x}
                  y={screenPos.y}
                  width={gridSquareSize.width}
                  height={gridSquareSize.height}
                  sprite={sprite}
                />
              })

                })

            )
          })
        }
        )}
      </>
    </div>
  );
}

export default App;
