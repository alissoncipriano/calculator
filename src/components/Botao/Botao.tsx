import { ChildrenProp } from '../../common/types';
import { StyledBotao } from './styles';

type Props = ChildrenProp & {
  bg: 'light' | 'dark' | 'color';
};

export const Botao = ({ children, bg }: Props) => {
  return <StyledBotao className={`Botao botao-${bg}`}>{children}</StyledBotao>;
};
