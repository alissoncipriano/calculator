import { ChildrenProp } from '../../common/types';
import { Botao } from '../Botao/Botao';
import { StyledTeclado } from './styles';

type TecladoProps = ChildrenProp & {
  updateVisor: (pressedButton: string) => void;
};

export const Teclado = ({ children, updateVisor }: TecladoProps) => {
  return (
    <StyledTeclado>
      <Botao bg='dark' updateVisor={updateVisor}>
        (
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        )
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        del
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        AC
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        7
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        8
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        9
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        ÷
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        4
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        5
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        6
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        x
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        1
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        2
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        3
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        -
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        0
      </Botao>
      <Botao bg='light' updateVisor={updateVisor}>
        .
      </Botao>
      <Botao bg='color' updateVisor={updateVisor}>
        =
      </Botao>
      <Botao bg='dark' updateVisor={updateVisor}>
        +
      </Botao>
    </StyledTeclado>
  );
};
