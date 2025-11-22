"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function Network({ count = 40, radius = 4 }) {
    const pointsRef = useRef<THREE.Points>(null)
    const linesRef = useRef<THREE.LineSegments>(null)
    const groupRef = useRef<THREE.Group>(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { positions, colors, lineIndices } = useMemo(() => {
        // eslint-disable-next-line react-hooks/purity
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const indices: number[] = []

        const colorPalette = [
            new THREE.Color("#0F766E"), // Deep Teal
            new THREE.Color("#2DD4BF"), // Sea Green
            new THREE.Color("#0EA5E9"), // Ocean
            new THREE.Color("#E2E8F0"), // Pearl
        ]

        // Generate random points within a sphere
        for (let i = 0; i < count; i++) {
            const r = radius * Math.cbrt(Math.random())
            const theta = Math.random() * 2 * Math.PI
            const phi = Math.acos(2 * Math.random() - 1)

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            // Assign random color
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b

            // Find connections (simple distance check for "nearby" nodes)
            // We only check previous nodes to avoid duplicates and self-loops
            for (let j = 0; j < i; j++) {
                const dx = positions[i * 3] - positions[j * 3]
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

                if (dist < 2.5) { // Connection threshold
                    indices.push(i, j)
                }
            }
        }

        return {
            positions,
            colors,
            lineIndices: new Uint16Array(indices)
        }
    }, [count, radius])

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05
            groupRef.current.rotation.x += delta * 0.02
        }
    })

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                {/* Nodes */}
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            count={colors.length / 3}
                            array={colors}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        size={0.15}
                        vertexColors
                        transparent
                        opacity={0.8}
                        sizeAttenuation
                        depthWrite={false}
                    />
                </points>

                {/* Connections */}
                <lineSegments ref={linesRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="index"
                            count={lineIndices.length}
                            array={lineIndices}
                            itemSize={1}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        color="#2DD4BF"
                        transparent
                        opacity={0.15}
                        depthWrite={false}
                    />
                </lineSegments>
            </Float>
        </group>
    )
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 opacity-60">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <Network count={60} radius={6} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
