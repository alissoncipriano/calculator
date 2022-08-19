import { ButtonGroups } from '../../common/constants';
import { checkButton } from '../mathCalculatorUtils';

export class Visor {
  private value: string | 'Error';

  constructor() {
    this.value = '0';
  }

  setValue(newValue: string) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }

  verify(pressedButton: string): void {
    // Grupo ao qual o botão pressionado pertence
    let buttonGroup = checkButton(pressedButton);

    // Casos de uso
    // Visor vazio e com 0 na tela
    // Os ÚNICOS botões que devem ser permitidos pressionar são os de números
    if (
      this.value.length === 1 &&
      this.value === '0' &&
      buttonGroup === ButtonGroups.numbers
    ) {
      this.setValue(pressedButton);
      return;
    }
    // Visor com algum valor na tela
    //   Visor com erro na tela
    if (this.value === 'Error') {
      this.setValue('0');
      return;
    }
    // Verifica se o botão pressionado é um número ou um parêntese
    if (
      buttonGroup === ButtonGroups.numbers ||
      buttonGroup === ButtonGroups.parenteses
    ) {
      this.setValue(this.value + pressedButton);
      return;
    }

    // Verifica se o botão pressionado é o '.'
    // Se o último valor no visor não for um '.', insere o novo '.'
    if (
      pressedButton === '.' &&
      this.value.substr(this.value.length - 1) !== ','
    ) {
      this.setValue(this.value + ',');
      return;
    }

    // Verifica se o botão pressionado é o 'AC'
    if (pressedButton === 'AC') {
      this.setValue('0');
      return;
    }
    // Verifica se o botão pressionado é o 'del'
    if (pressedButton === 'del') {
      //   Trata cada caso do botão 'del'
      this.handleDelete();
      return;
    }
    // Verifica se o botão pressionado é um operador matemático
    if (buttonGroup === ButtonGroups.math) {
      pressedButton = pressedButton.replace('÷', '/').replace('x', '*');

      this.setValue(this.value + ' ' + pressedButton + ' ');
      return;
    }

    this.setValue('Error');
    return;
  }

  handleDelete() {
    // Verifica se o valor no visor é o último
    if (this.value.substr(this.value.length - 1) === ' ') {
      this.setValue(this.value.slice(0, -2));
    }

    if (this.value.length === 1) {
      this.setValue('0');
      return;
    }

    this.setValue(this.value.slice(0, -1));
    return;
  }
}
