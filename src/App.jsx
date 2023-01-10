import { Canvas } from '@react-three/fiber'
import './App.css'
import Configurator from './components/Configurator'
import Experience from './components/Experience'
import { useState } from 'react'
import { Stats } from '@react-three/drei'

const defaultColorObject = {name: 'red', hex: '#E20017'}

function App() {
  const [carColor, setCarColor] = useState(defaultColorObject)

  const onColorChanged = (color) => {
    setCarColor(color)
  }

  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={['#1f1f1f']} />
        <fog attach="fog" args={['#1f1f1f', 10, 20]} />
        <Experience  carColor ={carColor}/>
        <Stats />
      </Canvas>
      <Configurator defaultColor={defaultColorObject} changeColor = {onColorChanged}/>
    </div>
  )
}

export default App
