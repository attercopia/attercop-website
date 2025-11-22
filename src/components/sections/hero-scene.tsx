"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2
            meshRef.current.rotation.y += delta * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#0F766E"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
            <mesh ref={meshRef} scale={0.8}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#2DD4BF"
                    transparent
                    opacity={0.1}
                />
            </mesh>
        </Float>
    )
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 opacity-60">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingShape />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
