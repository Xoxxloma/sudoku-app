import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      div {
        border-top: 4px solid ${theme.colors.black};
      }
    }
    &:nth-child(3n) {
      div {
        border-bottom: 3px solid ${theme.colors.black};
      }
    }

    div {
      &:nth-child(1) {
        border-left: solid 4px ${theme.colors.black};
      }

      &:nth-child(3n) {
        border-right: 4px solid ${theme.colors.black};
      }

      &:nth-child(4),
      &:nth-child(7) {
        border-left: none;
      }
    }
  `}
`;
