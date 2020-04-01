import styled, { css } from "styled-components";

interface IProps {
  active?: boolean
  puzzle?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, puzzle, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    border: 1px solid ${theme.colors.black};
    background: ${active ? theme.colors.blue : theme.colors.white};
    font-size: 20px;
    font-weight: ${puzzle ? 'bold' : 'normal'};
    transition: ${theme.transition};
    user-select: none;
    cursor: pointer;
    height: auto;


    &:before {
      padding-top: 100%;
      content: "";
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
