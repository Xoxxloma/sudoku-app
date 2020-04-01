import React, { FC } from 'react'
import { Container } from './styles/index'
import { NUMBERS } from '../../typings/fill-grid'
import { NumberButton } from './button'



export const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
      <NumberButton key={value} value={value} />
    ))}
  </Container>
)

