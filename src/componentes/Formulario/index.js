import { useState } from 'react'
import Botao from '../BotaoFormulario'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                required={true}
                valorMinimo='3'
                label="Nome"
                placeholder="Digite seu nome" />
                <CampoTexto 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                required={true}
                label="Cargo"
                 placeholder="Digite seu cargo" />
                <CampoTexto 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                label="Imagem"
                placeholder="Digite endereço da imagem" />
                <ListaSuspensa 
                required={true} 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario