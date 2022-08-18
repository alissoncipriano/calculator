import { Parser } from '../../common/constants';
import { Action } from '../action';

export class Calculator {
  equation: string;

  constructor() {
    this.equation = '0';
  }

  set(equation: string) {
    this.equation = equation;
  }

  calculate(equation: string): string {
    this.set(equation);

    let expression = Parser.parse(this.equation.replace(/,/g, '.'));
    let result = expression.evaluate({ x: 1 });

    return result.toString();
  }

  updateVisor(pressedButton: string, visor: string) {
    const action = new Action();

    const newVisor = action.verify(pressedButton, visor);

    if (newVisor === false) return 'Error';
    else if (newVisor === '/' || newVisor === '*')
      return visor + ' ' + newVisor + ' ';
    return newVisor;
  }
}
