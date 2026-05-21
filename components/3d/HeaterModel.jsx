'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import * as THREE from 'three';

export default function HeaterModel({ productId, isHeating = true }) {
  const groupRef = useRef();

  // Slow, industrial rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  // Reusable material for the glowing hot metal effect
  const materialProps = {
    color: isHeating ? "#ff4500" : "#808080",
    metalness: 0.8,
    roughness: 0.2,
    emissive: isHeating ? "#ea580c" : "#000000",
    emissiveIntensity: isHeating ? 2 : 0,
    side: THREE.DoubleSide
  };

  // Reusable material for the inner white-hot core
  const coreMaterial = (
    <meshBasicMaterial color="#ffffff" transparent opacity={isHeating ? 0.8 : 0} side={THREE.DoubleSide} />
  );

  // Function to render different shapes based on the product ID
  const renderShape = () => {
    switch (productId) {
      case 'ceramic-band-heater':
      case 'mica-band-heaters':
        // Renders an open ring / band
        return (
          <group>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[1.5, 1.5, 1, 32, 1, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          </group>
        );

      case 'muffle-furnaces':
        // Renders a heavy industrial box / oven
        return (
          <group>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.5, 2.5, 2.5]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Glowing inner chamber */}
            <mesh position={[0, 0, 1.26]}>
              <planeGeometry args={[1.5, 1.5]} />
              {coreMaterial}
            </mesh>
          </group>
        );

      case 'ceramic-strip-heater':
      case 'mica-strip-heaters':
        // Renders a flat, rectangular strip
        return (
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3, 0.2, 1]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );

      case 'immersion-heaters':
      case 'titanium-heaters':
        // Renders dual U-shaped heating rods with a heavy base flange
        return (
          <group>
            <mesh castShadow receiveShadow position={[-0.5, 1, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 3, 16]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh castShadow receiveShadow position={[0.5, 1, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 3, 16]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[1.2, 1.2, 0.5, 32]} />
              <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        );

      case 'thermocouples-and-sensors':
        // Renders a very thin precision probe
        return (
          <group>
            <mesh castShadow receiveShadow position={[0, 1, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Heavy sensor head */}
            <mesh position={[0, -1, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
              <meshStandardMaterial color="#555" metalness={0.8} />
            </mesh>
          </group>
        );

      default:
        // Default Tubular / Cartridge Heater (Standard Cylinder)
        return (
          <group>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.5, 0.5, 4, 32]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 4.1, 32]} />
              {coreMaterial}
            </mesh>
          </group>
        );
    }
  };

  return (
    <Center>
      <group ref={groupRef}>
        {renderShape()}
      </group>
    </Center>
  );
}