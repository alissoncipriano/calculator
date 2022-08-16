import { useRef } from 'react';
import { ChildrenProp } from '../../common/types';
import { StyledBotao } from './styles';

type Props = ChildrenProp & {
  bg: 'light' | 'dark' | 'color';
  updateVisor: (pressedButton: string) => void;
};

export const Botao = ({ children, bg, updateVisor }: Props) => {
  const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <StyledBotao
      className={`Botao botao-${bg}`}
      ref={buttonRef}
      onClick={() => {
        updateVisor(buttonRef.current.innerText);
      }}
    >
      {children}
    </StyledBotao>
  );
};
