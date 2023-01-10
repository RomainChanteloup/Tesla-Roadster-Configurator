import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

function App() {

  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={['#1f1f1f']} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
