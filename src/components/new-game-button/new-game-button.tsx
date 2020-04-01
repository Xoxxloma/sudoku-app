import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../styles/button/index'

import { Dispatch, Action } from 'redux'
import { createGrid } from '../../reducers/actions'

export const NewGameButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?'))
      dispatch(createGrid())
  }, [dispatch])

  return <Button onClick={createNewGrid}>New Game</Button>
}

