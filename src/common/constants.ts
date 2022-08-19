export const Parser = require('expr-eval').Parser;

export enum ButtonGroups {
  numbers = 'number',
  math = 'math',
  parenteses = 'parenteses',
}

export enum MathOperators {
  sum = '+',
  sub = '-',
  div = '÷',
  mult = 'x',
  equal = '=',
}

export const NumberButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const MathButtons: string[] = Object.values(MathOperators).filter(
  function (e) {
    return e !== '=';
  }
);

export const ParentesesButtons = ['(', ')'];
