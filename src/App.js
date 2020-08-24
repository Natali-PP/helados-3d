// eslint-disable-next-line
import React, { Suspense, useRef } from "react"
import { Canvas } from "react-three-fiber"
import {  OrbitControls } from "drei"
import './App.css';
import Helado from './components/Helado3D.js'
function App() {
  return (
  <Canvas sRGB shadowMap camera={{ position: [0, 5, 5], far: 50 }}>
    <ambientLight intensity={0.7} color={'#953612'}/>
    <pointLight position={[10, 10, 10]} color={'#862810'} />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color={'#3FECD5'} />
    <directionalLight
      castShadow
      position={[10, 8, -5]}
      intensity={1}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      color={'#EC0EA7'}
    />
    <Suspense fallback={null}>
      <Helado />
    </Suspense>
    <OrbitControls />
  </Canvas>
  );
}

export default App;
