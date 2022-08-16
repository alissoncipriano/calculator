import { ChildrenProp } from '../../common/types';
import { StyledCalculadora } from './styles';

export const Calculadora = ({ children }: ChildrenProp) => {
  return <StyledCalculadora>{children}</StyledCalculadora>;
};
