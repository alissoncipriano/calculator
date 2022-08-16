import { StyledVisor } from './styles';

type VisorProps = {
  texto: string;
};

export const Visor = ({ texto }: VisorProps) => {
  return (
    <StyledVisor>
      <textarea rows={1} value={texto} disabled />
    </StyledVisor>
  );
};
