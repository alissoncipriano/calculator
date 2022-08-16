import styled from 'styled-components';
import { colors } from '../../colors';

export const StyledBotao = styled.button`
  width: calc((100% / 4) - 5px);
  height: clamp(20px, 45px, 60px);
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;

  &.botao-light {
    background-color: ${colors.bgGreyLighter};
  }

  &.botao-dark {
    background-color: ${colors.bgGreyDark};
  }

  &.botao-color {
    background-color: ${colors.bgBlueLight};
    color: ${colors.white};
  }
`;
