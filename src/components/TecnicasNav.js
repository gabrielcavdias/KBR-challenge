import React from 'react'
import lupa from '../assets/lupa.png'
import rocket from '../assets/rocket.png'
import mkt from '../assets/mkt.png'
import ads from '../assets/ads.png'
import house from '../assets/house.png'
const TecnicasNav = props => {
    function isActive(str){
        return props.textoDestacado.toLowerCase().startsWith(str)
    }
    return (
        <nav className="tecnicasNav">
            <ul>
                <li className={isActive('seo') ? 'active' : null} onClick={() => props.setTextoDestacado(props.textos.seo.content)}>
                    <img src={lupa} alt="Ícone lupa" />
                    <h3>Seo</h3>
                </li>
                <li className={isActive('marketing1') ? 'active' : null} onClick={() => props.setTextoDestacado(props.textos.mkt1.content)}>
                    <img src={rocket} alt="Ícone foguete" />
                    <h3>MKT1</h3>
                </li>
                <li className={isActive('marketing2') ? 'active' : null} onClick={() => props.setTextoDestacado(props.textos.mkt2.content)}>
                    <img src={mkt} alt="Ícone megafone" />
                    <h3>MKT2</h3>
                </li>
                <li className={isActive('ads') ? 'active' : null} onClick={() => props.setTextoDestacado(props.textos.ads.content)}>
                    <img src={ads} alt="Ícone letra A de anúncio" />
                    <h3>ADS</h3>
                </li>
                <li className={isActive('negócio') ? 'active' : null} onClick={() => props.setTextoDestacado(props.textos.negocio.content)}>
                    <img src={house} alt="Ícone casa" />
                    <h3>Meu negócio</h3>
                </li>
            </ul>       
        </nav>
    )
}

export default TecnicasNav
