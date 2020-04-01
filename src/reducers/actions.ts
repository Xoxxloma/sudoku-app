import { AnyAction, Action } from "redux";
import * as types from "./types";
import { BLOCK_COORDS, NUMBERS } from "../typings/fill-grid";

export const createGrid = (): Action => ({ type: types.CREATE_GRID });
export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({ 
  type: types.SELECT_BLOCK,
  payload: coords
})

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS) => ({
  type: types.FILL_BLOCK,
  coords, 
  value,
})