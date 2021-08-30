import React from 'react'
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
            <form>
                <input type="text" name="nome" placeholder="Nome:" />
                <input type="email" name="email" placeholder="Email:" />
                <input type="tel" name="telefone" placeholder="Telefone:" />
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
