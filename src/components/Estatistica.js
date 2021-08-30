import React from 'react'
import rocketMan from '../assets/rocket-man.png'
import smartlove from '../assets/smartlove.png'
import googlelg from '../assets/google.png'
import regua from '../assets/regua.png'

const Estatistica = () => {
    return (
        <section className="estatisticaComponent">
            <img className="rocketMan" src={rocketMan} alt="arte em estilo chapado, um homem de negócios segura uma bandeira em cima de um foguete" />
            <article>
                <h2>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32</h2>
                <p>Temos expertise quando o assunto é sua empresa</p>
                <button className="btnPadrao btnPadrao--amarelo">Vamos começar um projeto?</button>
            </article>
            <div className="estatisticaComponent__wrapper">
                <div className="estatisticasCard">
                    <img src={regua} alt="ícone regua e lápis" />
                    <span className="txtDestaque">+de <span className="txtOrange">1300</span></span>
                    <p className="estatisticasCard__description">
                        Projetos criados e produzidos 
                    </p>
                </div>
                <div className="estatisticasCard">
                    <img src={smartlove} alt="ícone smartphone" />
                    <span className="txtDestaque">+de <span className="txtOrange">200</span></span>
                    <p className="estatisticasCard__description">
                        APPS criados com toda expertise
                    </p>
                </div>
                <div className="estatisticasCard">
                    <img src={googlelg} alt="ícone logo do google" />
                    <span className="txtDestaque"><span className="txtOrange">4,9 k</span></span>
                    <p className="estatisticasCard__description">
                        Nível de aceitação Google
                    </p>
                </div>  
            </div>                         
        </section>
    )
}

export default Estatistica
