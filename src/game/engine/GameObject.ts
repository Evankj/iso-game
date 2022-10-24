import {Sprite} from './Sprite';

export class GameObject {
  // Array for animation?
  sprites: Sprite[];
  constructor(sprites?: Sprite[]) {
    this.sprites = sprites ? sprites : [];
  }
}
