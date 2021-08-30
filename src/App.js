import React from 'react'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Estatistica from './components/Estatistica'
import TecnicasEquipe from './components/TecnicasEquipe'
import VideoExplicativo from './components/VideoExplicativo'
import VideoDestaque from './components/VideoDestaque'
import Contato from './components/Contato'

const App = () => {
  return (
    <div className="appContainer">
      <Inicio />
      <Portfolio />
      <Estatistica />
      <TecnicasEquipe />
      <VideoDestaque />
      <VideoExplicativo />
      <Contato />
    </div>
  )
}

export default App
