import { useState } from 'react';
import { Calculadora } from './components/Calculadora/Calculadora';
import { Teclado } from './components/Teclado/Teclado';
import { Visor } from './components/Visor/Visor';

const Parser = require('expr-eval').Parser;

function App() {
  const [visor, setVisor] = useState('0');

  const updateVisor = (pressedButton: string): void => {
    // setVisor(pressedButton);

    // Casos de uso
    // Visor vazio e com 0 na tela
    if (
      visor.length === 1 &&
      visor === '0' &&
      pressedButton !== '(' &&
      pressedButton !== ')' &&
      pressedButton !== 'del' &&
      pressedButton !== 'AC' &&
      pressedButton !== '÷' &&
      pressedButton !== 'x' &&
      pressedButton !== '-' &&
      pressedButton !== '+' &&
      pressedButton !== '.' &&
      pressedButton !== '='
    )
      setVisor(pressedButton);
    // Visor com um número na tela
    else if (visor.length > 0 && visor !== '0') {
      // Se o botão pressionado é um número
      if (
        pressedButton !== '(' &&
        pressedButton !== ')' &&
        pressedButton !== 'del' &&
        pressedButton !== 'AC' &&
        pressedButton !== '÷' &&
        pressedButton !== 'x' &&
        pressedButton !== '-' &&
        pressedButton !== '+' &&
        pressedButton !== '.' &&
        pressedButton !== '='
      )
        setVisor((prevState) => prevState + pressedButton);
      // Ponto flutuante
      else if (pressedButton === '.' && visor.substr(visor.length - 1) !== ',')
        setVisor((prevState) => prevState + ',');
      // Limpar visor
      else if (pressedButton === 'AC') setVisor('0');
      // Remover caractere anterior
      else if (pressedButton === 'del') {
        if (visor.length === 1 || visor === ' ') setVisor('0');
        else {
          if (visor.substr(visor.length - 1) === ' ') {
            if (visor.slice(0, -2) === '' || visor.slice(0, -2) === ' ')
              setVisor('0');
            else setVisor((prevState) => prevState.slice(0, -2));
          } else setVisor((prevState) => prevState.slice(0, -1));
        }
      }
      // operadores matematicos
      else if (
        pressedButton === '÷' ||
        pressedButton === 'x' ||
        pressedButton === '-' ||
        pressedButton === '+'
      ) {
        if (pressedButton === '÷') pressedButton = '/';
        else if (pressedButton === 'x') pressedButton = '*';
        setVisor((prevState) => prevState + ' ' + pressedButton + ' ');
      }
      // Parenteses
      else if (pressedButton === '(' || pressedButton === ')')
        setVisor((prevState) => prevState + pressedButton);
      // Igual
      else if (pressedButton === '=') {
        let expression = Parser.parse(visor.replace(/,/g, '.'));
        let result = expression.evaluate({ x: 1 });

        result = result.toString();

        setVisor(result.replace('.', ','));
      }
    }
  };

  return (
    <div className='App' data-testid='App'>
      <Calculadora>
        <Visor texto={visor}></Visor>
        <Teclado updateVisor={updateVisor} />
      </Calculadora>
    </div>
  );
}

export default App;
