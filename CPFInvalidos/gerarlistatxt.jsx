import React, { useState, useCallback } from "react";
import { Button, Card, Input } from "reactstrap";
import style from './style.css';
import Menu from '../Menu/menusuperior';
import api from '../../Services/api';





function GerarLista() {

    const [listaCpf, setListaCpf] = useState([]);

    const botaoGera = useCallback(() => {
        api.get(`cpf-invalido/`).then((response) => {
            setListaCpf(response.data)
        })
    }, [])


    return (
        <div>
            <div>
                <Menu />
                <Card id="estilo-card-gerar-lista" className="card-gerar">
                    <div className="linha1-titulo">
                        <p id="titulo-gerar-cpf" className="titulo-geralista"><strong> CPF's Inválidos</strong></p>
                        <Button id="botao-cor-gerarlist" className="gerarlista" onClick={botaoGera}>Gerar Lista</Button>
                    </div>
                    <div className="linha2-textarea">
                        <Input          
                            onChange={listaCpf}               
                            cols="20"
                            rows="50"
                            type="textarea"
                            id="estilo-textarea"
                            className="input-textarea"                                           
                        ></Input>
                        <Button id="estilo-botao-salvarcpf" className="botao-salvarlista" >Salvar</Button>
                    </div>
                </Card>
            </div>
            <><footer id="Rodape-estilo" className="Rodape">REFEITORIO TORA 2.0</footer></>
        </div>
    )
}

export default GerarLista;


