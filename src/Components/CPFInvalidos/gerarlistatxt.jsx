import React from "react";
import { Button, Card, Input } from "reactstrap";
import style from './style.css';
import * as yup from 'yup';
import CPFinvalido from '../Arquivostxt/cpfIncorreto.txt';
import Menu from '../Menu/menusuperior'


function GerarLista() {


    return (
        <div>
            <div>
                <Menu/>
                <Card id="estilo-card-gerar-lista" className="card-gerar">
                    <div className="linha1-titulo">
                        <p id="titulo-gerar-cpf" className="titulo-geralista"><strong> CPF's Inválidos</strong></p>
                        <Button id="botao-cor-gerarlist" className="gerarlista"  >Gerar Lista</Button>

                    </div>
                    <div className="linha2-textarea">
                        <Input type="textarea" placeholder="Lista CPF's Inválidos" id="estilo-textarea" className="input-textarea"></Input>
                        <Button id="estilo-botao-salvarcpf" className="botao-salvarlista">Salvar</Button>
                    </div>
                </Card>


            </div>
            <div>
                <footer id="Rodape-estilo" className="Rodape">REFEITORIO TORA 2.0</footer>
            </div>
        </div>
    )
}

export default GerarLista;

