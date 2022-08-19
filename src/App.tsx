import { useState } from 'react';
import { MathOperators } from './common/constants';
import { Calculadora } from './components/Calculadora/Calculadora';
import { Teclado } from './components/Teclado/Teclado';
import { Visor } from './components/Visor/Visor';
import { Calculator } from './utils/models/calculator';

const calculator = new Calculator();

function App() {
  const [visor, setVisor] = useState('0');

  const updateVisor = (pressedButton: string): void => {
    if (pressedButton === MathOperators.equal) {
      setVisor(calculator.calculate(visor));
      return;
    }
    setVisor(calculator.updateVisor(pressedButton));
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
