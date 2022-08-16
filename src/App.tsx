import { useState } from 'react';
import { Calculadora } from './components/Calculadora/Calculadora';
import { Teclado } from './components/Teclado/Teclado';
import { Visor } from './components/Visor/Visor';

function App() {
  const [visor, setVisor] = useState('0');

  return (
    <div className='App' data-testid='App'>
      <Calculadora>
        <Visor>{visor}</Visor>
        <Teclado />
      </Calculadora>
    </div>
  );
}

export default App;
