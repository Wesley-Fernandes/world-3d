/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, Suspense } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from "../public/Earth"
import Button from './components/Button'
import { useStorage } from './store/storage'
function App() {
  const {ambientlight, alight, setLight} = useStorage();

  return (
    <>
    <header className='container'>
      <Button/>
      <input value={alight} type='range' onChange={(e)=>setLight(Number(e.target.value).toFixed(1))}/>
    </header>
    <Canvas>
    <ambientLight intensity={alight}/>
    <OrbitControls/>
      <Suspense fallback={null}>
        <Earth/>
      </Suspense>
      <Environment preset={ambientlight}/>
    </Canvas>
    </>
  )
}

export default App
