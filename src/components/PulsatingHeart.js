import React, { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function PulsatingHeart({ hovered }) {
  const { scene, nodes, materials, error } = useGLTF('../assets/herz.glb')
  const [time, setTime] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (error) {
      console.error('Error loading GLTF model:', error)
    } else {
      console.log('GLTF model loaded successfully:', { nodes, materials })
    }
  }, [nodes, materials, error])

  useFrame(() => {
    setTime((prevTime) => prevTime + 1)
    if (hovered) {
      setRotation((prevRotation) => prevRotation + 1)
    }
  })

  if (error || !nodes || !materials) {
    return <mesh />
  }

  return <primitive object={scene} scale={1 + 0.05 * Math.sin(time * 0.05)} rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} receiveShadow castShadow />
}

useGLTF.preload('../assets/herz.glb')

export default PulsatingHeart
