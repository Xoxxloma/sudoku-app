import { AnyAction } from 'redux';
import { IReducer } from './interface';
import * as types from './types';
import { createFulllGrid } from '../utils/create-full-grid';
import { copyGrid } from '../utils/copy-grid';
import { removeNumbers } from '../utils/remove-numbers';
import { compareArrays } from '../utils/compare-arrays';
import { GRID } from '../typings/fill-grid';

const initialState: IReducer = {}

export const reducer = (state = initialState, action: AnyAction): IReducer => {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFulllGrid()
      const copiedGrid = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(copiedGrid)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    }
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value) {
          alert("oups it's wrong number")
          return state
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('u did it')
          return {
            ...state, 
            workingGrid: [...state.workingGrid] as GRID
          }
        }
      }
      return state
    }

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.payload
      }
    default: return state;
  }
}