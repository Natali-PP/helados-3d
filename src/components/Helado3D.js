import React, {  useRef } from "react"
import {  useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { softShadows } from "drei"

softShadows({ size: 0.005, frustrum: 2.75 })

const Helado = () => {
  const { nodes, materials } = useLoader(GLTFLoader, "scene.gltf");
  const group = useRef()
  console.log( materials['Scene_-_Root'])
  return (
    <group position={[0, -6, -8]} rotation={[0.7, -0.230, 0]} dispose={null} scale={[0.05, 0.05, 0.05]}>
      <mesh material={materials['Scene_-_Root']} geometry={nodes.mesh_0.geometry} castShadow receiveShadow />
    </group>
  )
}

export default Helado
