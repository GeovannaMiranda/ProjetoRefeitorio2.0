import React from "react";
import { Button, Card, Input } from "reactstrap";
import style from './style.css';
import Menu from '../Menu/menusuperior';




function GerarLista() {




    //Função Gerar Lista de CPF's Inválidos
    function loadDoc() {
        const txt = new XMLHttpRequest();
        txt.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("estilo-textarea").value = this.responseText;
            }
        }
        txt.open("GET", "cpfIncorreto.txt");
        txt.send();
       
    }


    //Função Para salvar Arquivo txt de CPF's invalidos corrigidos
    // let SalvaTxt = function(){
    //     let resposta = document.getElementById('estilo-textarea').value.trim();
    //     resposta.split(/\s+/);

    //     console.log(resposta);

    // }  

    function SalvaTxt(txt = "CPFCorrigido"){
        let resposta = document.getElementById('estilo-textarea').value.trim();
        txt = resposta.split(/\s+/);

        console.log(txt);
      
    }  
  


    

    return (
        <div>
            <div>
                <Menu />
                <Card id="estilo-card-gerar-lista" className="card-gerar">
                    <div className="linha1-titulo">
                        <p id="titulo-gerar-cpf" className="titulo-geralista"><strong> CPF's Inválidos</strong></p>
                        <Button id="botao-cor-gerarlist" className="gerarlista" onClick={loadDoc}>Gerar Lista</Button>
                    </div>
                    <div className="linha2-textarea">
                        <Input  cols="20" rows="50" type="textarea"  id="estilo-textarea" className="input-textarea"></Input>
                        <Button id="estilo-botao-salvarcpf" className="botao-salvarlista" onClick={SalvaTxt}>Salvar</Button>
                    </div>
                </Card>


            </div>
            <><footer id="Rodape-estilo" className="Rodape">REFEITORIO TORA 2.0</footer></>
        </div>
    )
}

export default GerarLista;


