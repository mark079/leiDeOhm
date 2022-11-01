import { useState } from 'react'
import './App.css'


function App() {
  const calculcar = () => {
    if(r && U) setResultado(`${U/r} A`);
    if(r && i) setResultado(`${r*i} V`);
    if(i && U) setResultado(`${U/i} Ω`);
    if(r && U && i)setResultado('Preencha apenas dois campos');
  }
  const [r, setR] = useState(0);
  const [U, setU] = useState(0);
  const [i, setI] = useState(0);
  const [resultado, setResultado] = useState('');
  return (
    <div className="App">

      <h1>Lei de Ohm</h1>
      <div className="card">
        <div className="inline-spacing">
          <div>r</div>
          <input type="number" onChange={e => setR(e.target.value)} />
          <div>Ω</div>
        </div>
        <div className="inline-spacing">
          <div>U</div>
          <input type="number" onChange={e => setU(e.target.value)} />
          <div>V</div>
        </div>
        <div className="inline-spacing">
          <div>i</div>
          <input type="number" onChange={e => setI(e.target.value)} />
          <div>A</div>
        </div>
        <button onClick={calculcar}>Calcular</button>
        <div className="resultado">{resultado || 'Resultado'}</div>
      </div>

    </div>
  )
}

export default App
