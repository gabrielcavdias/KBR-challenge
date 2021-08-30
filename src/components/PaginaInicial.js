import React from 'react'
import splashworkers from '../assets/splashworkers.png'
const PaginaInicial = () => {
    return (
        <div className="inicioComponent__paginaInicial">
            <article>
                <h1>Lorem Ipsum is simply dummy text</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <span className="txtDestaque">1500s, when an unknown printer took a galley of type and</span> scrambled it to make a type specimen book. 
                </p>
                <p>
                    It has survived not only five centuries, <span className="txtDestaque">but also the leap into electronic typesetting</span>, remaining essentially unchanged. It  
                </p>
                <a href="#contato" className="btnPadrao btnPadrao--amarelo">Solicite seu orçamento agora</a>
            </article>
            <div className="splashworkers">
                <img src={splashworkers} alt="arte em estilo chapado com funcionários de uma agência de marketing" />
            </div>
        </div>
    )
}

export default PaginaInicial
