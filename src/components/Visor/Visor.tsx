import { ChildrenProp } from '../../common/types';
import { StyledVisor } from './styles';

export const Visor = ({ children }: ChildrenProp) => {
  return (
    <StyledVisor>
      <span>{children}</span>
    </StyledVisor>
  );
};
