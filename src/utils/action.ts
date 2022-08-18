import {
  MathButtons,
  NumberButtons,
  ParentesesButtons,
} from '../common/constants';

function isNumber(value: string): true | false {
  const objectNumbers = Object.assign({}, NumberButtons);

  if (Object.values(objectNumbers).includes(value)) return true;
  return false;
}

function isParenteses(value: string): true | false {
  const objectParenteses = Object.assign({}, ParentesesButtons);

  if (Object.values(objectParenteses).includes(value)) return true;
  return false;
}

function isMath(value: string): true | false {
  const objectMath = Object.assign({}, MathButtons);

  if (Object.values(objectMath).includes(value)) return true;
  return false;
}

export class Action {
  case!: number;

  verify(pressedButton: string, visor: string): string | false {
    // Casos de uso
    // Visor vazio e com 0 na tela
    if (visor.length === 1 && visor === '0') {
      // Os ÚNICOS botões que devem ser permitidos pressionar são os de números
      // Verifica se o botão pressionado é um número
      if (isNumber(pressedButton)) return pressedButton;
      return '0';
    }
    // Vizor com algum valor na tela
    else {
      //   Visor com erro na tela
      if (visor === 'Error') {
        return '0';
      }
      // Verifica se o botão pressionado é um número ou um parêntese
      else if (isNumber(pressedButton) || isParenteses(pressedButton))
        return visor + pressedButton;
      // Verifica se o botão pressionado é o '.'
      // Se o último valor no visor não for um '.', insere o novo '.'
      else if (pressedButton === '.' && visor.substr(visor.length - 1) !== ',')
        return visor + ',';
      // Verifica se o botão pressionado é o 'AC'
      else if (pressedButton === 'AC') return '0';
      // Verifica se o botão pressionado é o 'del'
      else if (pressedButton === 'del') {
        // Verifica se o valor no visor é o último
        if (visor.length === 1 || visor === ' ') return '0';
        else {
          if (visor.substr(visor.length - 1) === ' ') {
            if (visor.slice(0, -2) === '' || visor.slice(0, -2) === ' ')
              return '0';
            else return visor.slice(0, -2);
          } else return visor.slice(0, -1);
        }
      }
      // Verifica se o botão pressionado é um operador matemático
      else if (isMath(pressedButton)) {
        if (pressedButton === '÷') return '/';
        else if (pressedButton === 'x') return '*';
        return visor + ' ' + pressedButton + ' ';
      }

      return false;
    }
  }
}
