import { Parser } from '../../common/constants';
import { Visor } from './Visor';

export class Calculator {
  equation: string;
  visor: Visor = new Visor();

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

    this.visor.setValue(result.toString());

    return result.toString();
  }

  updateVisor(pressedButton: string) {
    this.visor.verify(pressedButton);

    return this.visor.getValue();
  }
}
