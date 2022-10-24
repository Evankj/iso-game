export class IsoGrid {
  cartesianGrid: number[][][][];
  screenWidth: number;
  screenHeight: number;
  gridSquareSize: { width: number, height: number };
  gridHeightInCells: number;
  gridWidthInCells: number;
  constructor(cartesianGrid: number[][][][], screenWidth: number, screenHeight: number, gridSquareSize: { width: number, height: number }) {
    this.cartesianGrid = cartesianGrid;
    this.gridSquareSize = gridSquareSize;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.gridHeightInCells = cartesianGrid[0].length;
    this.gridWidthInCells= cartesianGrid[0][0].length;
  }

  convertFromCartesianToScreenSpace(x: number, y: number, z: number) {
    // const iso_x = (this.screenWidth / 2) + ((this.gridWidthInCells * this.gridSquareSize.width) / 2) + (x -  y) * (this.gridSquareSize.width / 2);
    const iso_x = (this.screenWidth / 2) - ((this.gridWidthInCells * this.gridSquareSize.width)) + (x -  y) * (this.gridSquareSize.width / 2);
    // const iso_y = ((( y - z + x) * this.gridSquareSize.height / 2) + (this.screenHeight/2) + ((this.gridHeightInCells * this.gridSquareSize.height) / 2));
    const iso_y = (( y - 2*z + x) * (this.gridSquareSize.height/8)) + (this.screenHeight/2) - ((this.gridHeightInCells * this.gridSquareSize.height) / 2);
    return { x: iso_x, y: iso_y, z: z };
  }
}
