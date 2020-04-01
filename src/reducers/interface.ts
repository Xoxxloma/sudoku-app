import { GRID, BLOCK_COORDS } from '../typings/fill-grid';

export interface IReducer {
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_COORDS
}