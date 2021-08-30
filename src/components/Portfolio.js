import React from 'react'
import codingImg from '../assets/coding.png'
import PortfolioSwitcher from './PortfolioSwitcher'
const Portfolio = () => {
    return (
        <section className="portfolioComponent">
            <article className="portfolioComponent__whyUse">
                <h2>Why do we use it?</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
            </article>
            {/*Não encontrei uma forma de fazer esse elemento funcionar em vários tamanhos de tela*/}
            {/* <div className="layoutElement"></div> */}
            <div className="portfolioComponent__wrapper">
                <PortfolioSwitcher />
                <div className="portfolioComponent__wrapper__description">
                    <article>
                        <h2>What is Lorem Ipsum?</h2>
                        <p className="txtOrange">There are many variations of passages</p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                        </p>
                        <a href="#contato" className="btnPadrao btnPadrao--azul">Gostou? Fale conosco</a>
                    </article>
                    <article>
                        <h2>Why do we use it?</h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                        </p>
                    </article>
                </div>{/*Decription*/}
                <div className="imgSide">
                    <img src={codingImg} alt="Ilutração chapada, desenvolvedor de software olha o notebook" />
                </div>{/*imgSide*/}
            </div>{/*Wrapper*/}
        </section>
    )
}

export default Portfolio
