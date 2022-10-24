import React from 'react'
import { GameObject } from '../../game/engine/GameObject'

type TileProps = {
  x: number,
  y: number,
  width: number,
  height: number,
  sprite: string,
}
export const Tile = (props: TileProps) => {
  return (
    <img src={props.sprite} alt="logo" style={{
      position: 'absolute',
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height
    }} />
  )
}
