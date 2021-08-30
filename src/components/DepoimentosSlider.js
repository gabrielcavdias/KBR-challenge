import React from 'react'
import SliderCard from './SliderCard'
import depoimento1 from '../assets/depoimento1.png'
import depoimento2 from '../assets/depoimento2.png'
import depoimento3 from '../assets/depoimento3.png'
const DepoimentosSlider = () => {
    let depoimentos1 = [
        {
            nome: "Deivid Evedove",
            img: depoimento1,
            depoimento: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        },
        {
            nome: " Gustavo Luiz Amaral Gerhardt",
            img: depoimento2,
            depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            nome: "Rodrigo Calvancanti Xavier",
            img: depoimento3,
             depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }
    ]
    let depoimentos2 = [
        {
            nome: "Davi Silveira",
            img: depoimento2,
            depoimento: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        },
        {
            nome: "Gustav Antonov",
            img: depoimento3,
            depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            nome: "Roger Santana",
            img: depoimento1,
             depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }
    ]
    let depoimentos3 = [
        {
            nome: "David Coverdale",
            img: depoimento3,
            depoimento: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        },
        {
            nome: "Bruce Dickinson",
            img: depoimento2,
            depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            nome: "Ronnie James Dio",
            img: depoimento1,
             depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }
    ]
    const [depoimentosAtivo, setDepoimentosAtivo] = React.useState(1)
    return (
        <div className="videoExplicativoComponent__slider">
            <div className={`videoExplicativoComponent__slider__wrapper`}>
                {
                (depoimentosAtivo===1 && depoimentos1.map(cliente =>{
                    return <SliderCard key={cliente.nome} nome={cliente.nome} img={cliente.img} depoimento={cliente.depoimento} />
                }))
                ||//ou
                (depoimentosAtivo===2 && depoimentos2.map(cliente =>{
                    return <SliderCard key={cliente.nome} nome={cliente.nome} img={cliente.img} depoimento={cliente.depoimento} />
                }))
                ||//ou
                (depoimentosAtivo===3 && depoimentos3.map(cliente =>{
                    return <SliderCard key={cliente.nome} nome={cliente.nome} img={cliente.img} depoimento={cliente.depoimento} />
                }))
                }
            </div>
            <div className="videoExplicativoComponent__slider__controls">
                <span className={(depoimentosAtivo===1 && 'sliderActive').toString()} onClick={()=>setDepoimentosAtivo(1)}></span>
                <span className={(depoimentosAtivo===2 && 'sliderActive').toString()} onClick={()=>setDepoimentosAtivo(2)}></span>
                <span className={(depoimentosAtivo===3 && 'sliderActive').toString()} onClick={()=>setDepoimentosAtivo(3)}></span>
            </div>
        </div>
    )
}

export default DepoimentosSlider
