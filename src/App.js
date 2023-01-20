import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times';

function App() {

  const times = [
    {
      nome: 'Programação',
      corSecundaria: '#ff8888',
      corPrimaria: '#6278f7'
    },
    {
      nome: 'Engenharia',
      corSecundaria: '#97cd90',
      corPrimaria: '#67b85b'
    },
    {
      nome: 'Front-end',
      corSecundaria: '#ca97d1',
      corPrimaria: '#8b509d'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
        <Banner></Banner>
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map(time => <Time key={time.nome} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} nomeTime={time.nome}></Time>)}
    </div>
  );
}

export default App;
