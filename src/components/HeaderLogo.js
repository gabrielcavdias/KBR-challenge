import React from 'react'
import logo from '../assets/logo.png'
import wpplogo from '../assets/wpplogo.png'

const HeaderLogo = () => {
    return (
        <header className="inicioComponent__header">
            <img src={logo} alt="Logo da empresa, lençóis coloridos parecem balançar com o vento" />
            <div className="inicioComponent__header__btnContainer">
                <a target="_blank" rel="noreferrer" href="https://wa.me/5513981340197?text=Vim%20pelo%20teste%20da%20kbr%20tec" className='btnPadrao btnPadrao--wpp'><img src={wpplogo} alt="Logo do whatsapp" /> Chame pelo Whatsapp</a>
                <button className="btnPadrao btnPadrao--amarelo">Vamos começar um projeto?</button>
            </div>
        </header>
    )
}

export default HeaderLogo
