import React, { FC, Children, useEffect, useCallback } from 'react';
import useMousetrap from 'react-hook-mousetrap';
import { Container, Row } from './styles/styles';
import { Block } from './block/block';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createGrid, selectBlock, fillBlock } from '../../reducers/actions';
import { INDEX, BLOCK_COORDS, NUMBERS, N, GRID } from '../../typings/fill-grid';
import { IReducer } from '../../reducers/interface';


interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
  solvedGrid?: GRID
}

export const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
    })
  )

  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    if (!state.solvedGrid) create()
  }, [create, state.solvedGrid])

  const moveAnyDirection = (rowAdjust: 0 | 1 | -1, colAdjust: 0 | 1 | -1) => {
    if (
      !state.selectedBlock ||
      (rowAdjust !== 0 && colAdjust !== 0) ||
      (rowAdjust === 0 && colAdjust === 0)
    ) {
      return;
    }
    let canMove = false;
    if (rowAdjust !== 0) {
      canMove =
        (rowAdjust === -1 && state.selectedBlock[0] > 0) ||
        (rowAdjust === 1 && state.selectedBlock[0] < 8);
    } else {
      canMove =
        (colAdjust === -1 && state.selectedBlock[1] > 0) ||
        (colAdjust === 1 && state.selectedBlock[1] < 8);
    }
    if (canMove) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + rowAdjust) as INDEX,
          (state.selectedBlock[1] + colAdjust) as INDEX,
        ])
      );
    }
  };

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock))
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  useMousetrap("up", () => {
    moveAnyDirection(-1, 0);
  });

  useMousetrap("down", () => {
    moveAnyDirection(1, 0);
  });

  useMousetrap("left", () => {
    moveAnyDirection(0, -1);
  });

  useMousetrap("right", () => {
    moveAnyDirection(0, 1);
  });

  useMousetrap(['1'], () => fill(1))
  useMousetrap(['2'], () => fill(2))
  useMousetrap(['3'], () => fill(3))
  useMousetrap(['4'], () => fill(4))
  useMousetrap(['5'], () => fill(5))
  useMousetrap(['6'], () => fill(6))
  useMousetrap(['7'], () => fill(7))
  useMousetrap(['8'], () => fill(8))
  useMousetrap(['9'], () => fill(9))

  return (
    <Container data-cy="grid-container">
      {Children.toArray([...Array(9)].map((_, rowIdx) => (
        <Row data-cy="grid-row-container">
          {Children.toArray([...Array(9)].map((_, collIdx) => (
            <Block rowIdx={rowIdx as INDEX} collIdx={collIdx as INDEX} />
          )))}
        </Row>
      )))}
    </Container>
  )
}
