import React from 'react'
import guanabara from '../assets/guanabara.jpg'
import DepoimentoSlider from './DepoimentosSlider'

const VideoExplicativo = () => {
    return (
        <section className="videoExplicativoComponent">
            <h2>Where can I get some?</h2>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightl
            </p>
            <img src={guanabara} alt="Imagem simula um player de vídeo" />
            <h2>Criação de Site em São Paulo: O que dizem nossos clientes sobre os resultados</h2>
            <p>O acompanhamento da nossa equipe de especialistas garante um atendimento personalizado e uma dedicação exclusiva, propondo em cada projeto todas as possibilidades e estratégias direcionadas ao seu produto ou serviço.</p>
            <DepoimentoSlider />
        </section>
    )
}

export default VideoExplicativo
