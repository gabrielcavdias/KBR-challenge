import React from 'react'
import TecnicasNav from './TecnicasNav'
import teamwork from '../assets/teamworking.png'

let textos = {
    seo: {
        content: "Seo é muito importante para aparecer para os clientes. If you are going to use a passage embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet"
    }, 
    mkt1: {
        content: "Marketing1 projeta sua empresa como jamais. If you are going to use a passage embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet "
    },
    mkt2: {
        content: "Marketing2 projeta sua empresa como jamais. If you are going to use a passage embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet "
    },
    ads: {
        content: "Ads destaca sua empresa para todos que usam internet. If you are going to use a passage embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet "
    },
    negocio: {
        content: "Negócio é muito importante para o seu negócio. If you are going to use a passage embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet "
    }
}

const TecnicasEquipe = () => {
    const [textoDestacado, setTextoDestacado] = React.useState(textos.seo.content)
    return (
        <section className="tecnicasEquipeComponent">
            <h2>Conheça um pouco algumas técnicas que usaremos para Criação de seu site</h2>
            <TecnicasNav textos={textos} setTextoDestacado={setTextoDestacado} textoDestacado={textoDestacado} />
            <p className="textoDestacado">
                {textoDestacado}
            </p>
            <div className="tecnicasEquipeComponent__modelos">
                <div>
                    <img src={teamwork} alt="Três colegas de trabalho olham para notebook" />
                </div>
                <div>
                    <article>
                        <h2>Combined with a handful of model sentence structures, to generate Lorem Ipsum which</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                            "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                            "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <a href="#contato" className="btnPadrao btnPadrao--azul">Fale com nossa equipe</a>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default TecnicasEquipe
