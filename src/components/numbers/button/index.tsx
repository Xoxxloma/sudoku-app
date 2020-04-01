import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Button } from '../../styles/button/index'
import { IReducer } from '../../../reducers/interface'
import { fillBlock } from '../../../reducers/actions'
import { BLOCK_COORDS, N, NUMBERS  } from '../../../typings/fill-grid'


interface IProps {
  value: NUMBERS
}

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}

export const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0)
      dispatch(fillBlock(value, state.selectedBlock))
  }, [dispatch, state.selectedBlock, state.selectedValue, value])

  return <Button onClick={fill}>{value}</Button>
}
