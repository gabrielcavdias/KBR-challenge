import React from 'react'
import switch1 from '../assets/switch-1.png'
import switch2 from '../assets/switch-2.png'
import switch3 from '../assets/switch-3.png'

const PortfolioSwitcher = () => {
    const [padraoZ, setPadraoZ] = React.useState([1,2,3])
    return (
        <div>
            <div className="exemplos">
                <img src={switch1} style={{zIndex: padraoZ[2]}} className={(padraoZ[2]===3 && 'animated').toString()} alt="Página da web usada como exemplo" />
                <img src={switch2} style={{zIndex: padraoZ[1]}} className={(padraoZ[1]===3 && 'animated').toString()} alt="Página da web usada como exemplo" />
                <img src={switch3} style={{zIndex: padraoZ[0]}} className={(padraoZ[0]===3 && 'animated').toString()} alt="Página da web usada como exemplo" />
            </div>
            <div className="exemplosControls">
                <button className="btnControl btnControl--left" onClick={()=>{
                    let clone = [...padraoZ]
                    clone.push(clone.shift())
                    setPadraoZ(clone)
                    }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M3.30247 0.207793L2.87367 0.633626C2.73976 0.767643 2.66599 0.945945 2.66599 1.13651C2.66599 1.32696 2.73976 1.50548 2.87367 1.63949L7.73149 6.49709L2.86828 11.3603C2.73437 11.4941 2.66071 11.6726 2.66071 11.8631C2.66071 12.0535 2.73437 12.2321 2.86828 12.3661L3.29443 12.792C3.57156 13.0693 4.02297 13.0693 4.30009 12.792L10.1111 7.00177C10.2449 6.86797 10.3392 6.68966 10.3392 6.49752L10.3392 6.4953C10.3392 6.30474 10.2448 6.12643 10.1111 5.99263L4.31584 0.207793C4.18203 0.0737762 3.99834 0.000213565 3.80789 2.81088e-06C3.61732 2.81921e-06 3.43617 0.0737762 3.30247 0.207793Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="13" height="13" fill="white" transform="translate(0 13) rotate(-90)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </button>
                <button className="btnControl btnControl--right" onClick={()=>{
                    let clone = [...padraoZ]
                    clone.unshift(clone.pop())
                    setPadraoZ(clone)
                }}>
                   <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M3.30247 0.207793L2.87367 0.633626C2.73976 0.767643 2.66599 0.945945 2.66599 1.13651C2.66599 1.32696 2.73976 1.50548 2.87367 1.63949L7.73149 6.49709L2.86828 11.3603C2.73437 11.4941 2.66071 11.6726 2.66071 11.8631C2.66071 12.0535 2.73437 12.2321 2.86828 12.3661L3.29443 12.792C3.57156 13.0693 4.02297 13.0693 4.30009 12.792L10.1111 7.00177C10.2449 6.86797 10.3392 6.68966 10.3392 6.49752L10.3392 6.4953C10.3392 6.30474 10.2448 6.12643 10.1111 5.99263L4.31584 0.207793C4.18203 0.0737762 3.99834 0.000213565 3.80789 2.81088e-06C3.61732 2.81921e-06 3.43617 0.0737762 3.30247 0.207793Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="13" height="13" fill="white" transform="translate(0 13) rotate(-90)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default PortfolioSwitcher
