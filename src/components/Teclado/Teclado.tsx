import { Botao } from '../Botao/Botao';
import { StyledTeclado } from './styles';

export const Teclado = () => {
  return (
    <StyledTeclado>
      <Botao bg='dark'>(</Botao>
      <Botao bg='dark'>)</Botao>
      <Botao bg='dark'>%</Botao>
      <Botao bg='dark'>AC</Botao>
      <Botao bg='light'>7</Botao>
      <Botao bg='light'>8</Botao>
      <Botao bg='light'>9</Botao>
      <Botao bg='dark'>÷</Botao>
      <Botao bg='light'>4</Botao>
      <Botao bg='light'>5</Botao>
      <Botao bg='light'>6</Botao>
      <Botao bg='dark'>x</Botao>
      <Botao bg='light'>1</Botao>
      <Botao bg='light'>2</Botao>
      <Botao bg='light'>3</Botao>
      <Botao bg='dark'>-</Botao>
      <Botao bg='light'>0</Botao>
      <Botao bg='light'>.</Botao>
      <Botao bg='color'>=</Botao>
      <Botao bg='dark'>+</Botao>
    </StyledTeclado>
  );
};
