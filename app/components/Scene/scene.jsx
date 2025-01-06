import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Shape, ExtrudeGeometry } from 'three';

const Box = ({ position, rotation, matcapTexture }) => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 20,
        curveSegments: 20
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();


    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshMatcapMaterial matcap={matcapTexture} flatShading={false} />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef();
    const matcapTexture = useLoader(TextureLoader, '/matcaps/matcap1.png');

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.05;

        }
    });

    const boxes = Array.from({ length: 50 }, (_, index) => ({
        position: [(index - 25) * 0.75, 0, 0],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ],
        id: index
    }));

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                    matcapTexture={matcapTexture}
                />
            ))}
        </group>
    );
};

const Scene = () => {
    return (
        <div className="w-screen h-full bg-black">
            <Canvas camera={{ position: [5, 5, 10], fov: 50 }}
                    style={{ background: '#000000' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};

export default Scene;