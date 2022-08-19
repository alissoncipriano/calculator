import {
  ButtonGroups,
  MathButtons,
  NumberButtons,
  ParentesesButtons,
} from '../common/constants';

export const checkButton = (value: string): string | false => {
  if (NumberButtons.includes(value)) return ButtonGroups.numbers;
  if (ParentesesButtons.includes(value)) return ButtonGroups.parenteses;
  if (MathButtons.includes(value)) return ButtonGroups.math;

  return false;
};
