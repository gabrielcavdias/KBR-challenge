import React from 'react'
import video1 from '../assets/video-1.png'
import video2 from '../assets/video-2.png'
import video3 from '../assets/video-3.png'

const VideoDepoimentos = () => {
    const [videoReturn, setVideoReturn] = React.useState([1,2,3])
    function setImgSrc(numero){
        switch (numero) {
            case 1:
                return video1
            case 2:
                return video2
            case 3:
                return video3
            default:
                return null
        }
    }
    return (
        <section className="videoDestaqueComponent__depoimentos">
            <h2 className="videoDestaqueComponent__title videoDestaqueComponent__title--depo">Depoimentos</h2>
            <p className="videoDestaqueComponent__descricao videoDestaqueComponent__descricao--depo">
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            </p>
            <div className="videoDestaqueComponent__depoimentos__videos">
                <img src={setImgSrc(videoReturn[0])} alt="Simulação de thumbnail de vídeo 01" />
                <img src={setImgSrc(videoReturn[1])} alt="Simulação de thumbnail de vídeo 02" />
                <img src={setImgSrc(videoReturn[2])} alt="Simulação de thumbnail de vídeo 03" />
            </div>
            <div className="videoDestaqueComponent__depoimentos__controls">
                <button onClick={()=>{
                    let clone = [...videoReturn]
                    clone.push(clone.shift())
                    setVideoReturn(clone)
                }}>
                    {/*Pra cima*/}
                    &lt;
                </button>
                <button onClick={()=>{
                    let clone = [...videoReturn]
                    clone.unshift(clone.pop())
                    setVideoReturn(clone)
                }
                }>
                    {/*Pra baixo*/}
                    &gt;
                </button>
            </div>
         </section>
    )
}

export default VideoDepoimentos
