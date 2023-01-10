import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

function App() {

  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={['#1f1f1f']} />
        <fog attach="fog" args={['#1f1f1f', 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
