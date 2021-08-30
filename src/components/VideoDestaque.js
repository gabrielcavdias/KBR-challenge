import React from 'react'
import VideoDepoimentos from './VideoDepoimentos'
import Noticias from './Noticias'

const VideoDestaque = () => {
    return (
        <div className="videoDestaqueComponent">
            <VideoDepoimentos />
            <Noticias />
        </div>
    )
}

export default VideoDestaque
