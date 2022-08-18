import { useState } from 'react';
import { Calculadora } from './components/Calculadora/Calculadora';
import { Teclado } from './components/Teclado/Teclado';
import { Visor } from './components/Visor/Visor';
import { Calculator } from './utils/models/calculator';

function App() {
  const [visor, setVisor] = useState('0');
  const calculator = new Calculator();

  const updateVisor = (pressedButton: string): void => {
    if (pressedButton === '=') {
      setVisor(calculator.calculate(visor));
      return;
    }
    setVisor(calculator.updateVisor(pressedButton, visor));
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
