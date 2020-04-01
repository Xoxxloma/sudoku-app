import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { N, INDEX } from '../../../typings/fill-grid';
import { IReducer } from '../../../reducers/interface';
import { AnyAction, Dispatch } from 'redux';
import { selectBlock } from '../../../reducers/actions';

interface IProps {
  rowIdx: INDEX
  collIdx: INDEX
}

interface IState {
  isActive: boolean
  value: N
  isPuzzle: boolean
}

export const Block: FC<IProps> = ({ rowIdx, collIdx }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const state = useSelector<IReducer, IState>(({ workingGrid, selectedBlock, challengeGrid }) => ({
    isActive: selectedBlock ? selectedBlock[0] === rowIdx && selectedBlock[1] === collIdx : false,
    value: workingGrid ? workingGrid[rowIdx][collIdx] : 0,
    isPuzzle: challengeGrid && challengeGrid[rowIdx][collIdx] !== 0 ? true : false
  }))

  const handleClick = () => {
    if (!state.isActive) {
      dispatch(selectBlock([rowIdx, collIdx]))
    }
  }

  return (
    <Container data-cy={`block-${rowIdx}-${collIdx}`} onClick={handleClick} active={state.isActive} puzzle={state.isPuzzle}>
      {state.value === 0 ? "" : state.value}
    </Container>
  )
};