import React from 'react'
import globoLogo from '../assets/globo-logo.png'
import g1Logo from '../assets/g1-logo.png'
import uolLogo from '../assets/uol-logo.png'
import bandnewsLogo from '../assets/bandnews-logo.png'
import vendamaisLogo from '../assets/vendamais-logo.png'
import cbnLogo from '../assets/cbn-logo.png'
import ogloboLogo from '../assets/oglobo-logo.png'
import negociosLogo from '../assets/negocios-logo.png'

const Noticias = () => {
    return (
        <section className="videoDestaqueComponent__noticias">
                <h2 className="videoDestaqueComponent__title videoDestaqueComponent__title--news">Lorem Ipsum</h2>
                <p className="videoDestaqueComponent__descricao videoDestaqueComponent__descricao--news">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium: 
                </p>
                <div className="portais">
                    <div className="portais__logos">
                        <div>
                            <img src={globoLogo} alt="logo da Globo" />
                        </div>
                        <div>
                            <img src={g1Logo} alt="logo do portal g1" />
                        </div>
                    </div>
                    <div className="portais__logos">
                        <div>
                            <img src={uolLogo} alt="Logo do portal Uol" />  
                        </div>
                        <div>
                            <img src={bandnewsLogo} alt="Logo do portal band news" />
                        </div>
                        <div>
                            <img src={vendamaisLogo} alt="Logo do venda mais" />
                        </div>
                    </div>
                    <div className="portais__logos">
                        <div>
                            <img src={cbnLogo} alt="Logo da CBN" />
                        </div>
                        <div>
                            <img src={ogloboLogo} alt="Logo do Jornal O Globo" />
                        </div>
                        <div>
                            <img src={negociosLogo} alt="Logo do portal negócios" />
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default Noticias
