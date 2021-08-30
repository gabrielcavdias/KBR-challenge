import React from 'react'
import InputMask from "react-input-mask"
import logo from '../assets/logo.png'
import bgOpacity from '../assets/bg-opacity.png'

const Contato = () => {
    return (
        <div className="contatoComponent" style={{backgroundImage:`url(${bgOpacity})`}}>
            <h2>Vamos conversar?</h2>
            <p>
                Preencha o formulário abaixo e a nossa equipe lhe enviará mais informações
                para que possamos atender as suas necessidades.
            </p>
            <form id="contato" onSubmit={event => {
                event.preventDefault()
                
                let form = new FormData(event.target)
                let name = form.get("nome")
                let email = form.get("email")
                let tel = form.get("telefone")
                window.alert(`
                    Dados coletados: 
                    nome: ${name}
                    e-mail: ${email}
                    telefone: ${tel}
                `)
                event.target.childNodes.forEach(child => {
                        child.value=''
                })
                }}>
                <input type="text" name="nome" placeholder="Nome:" maxLength="35" required />
                <input type="email" name="email" placeholder="Email:" maxLength="35" required />
                <InputMask mask="(99)99999-9999 " type="tel" name="telefone" placeholder="Telefone:" required />
                <button className="btnPadrao btnPadrao--amarelo">Enviar mensagem</button>
            </form>
            <footer>
                <img src={logo} alt="Logo da empresa, lençóis coloridos parecem balançar com o vento" />
                <p>KBRTEC - Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

export default Contato
