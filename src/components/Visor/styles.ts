import styled from 'styled-components';
import { colors } from '../../colors';

export const StyledVisor = styled.div`
  width: 100%;
  height: clamp(50px, 90px, 25vw);
  border: 1px solid ${colors.bgGreyLight};
  border-radius: 8px;
  font-size: 2em;
  font-weight: 300;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;

  textarea {
    margin-top: 30px;
    width: 100%;
    text-align: right;
    outline: none;
    border: none;
    resize: none;
    font-size: 1em;
    font-weight: 300;
    background: none;
    color: ${colors.black};
  }
`;
