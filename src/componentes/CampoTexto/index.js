import { useState } from 'react';
import './CampoTexto.css';
const CampoTexto = (props) => {

    // exemplo interpolacao string
    // const placeholderExample = `${props.placeholder}... interpolado`;
    // let valor = 'rene silva';

    //use State para fazer twoWay data binding
    //primeiro var é o valor em si, segunda é a função setter
    // const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} minLength={props.valorMinimo} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto