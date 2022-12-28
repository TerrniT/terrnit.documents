import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Bulbasaur(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('bulbasaur.glb');


  useFrame(() => {
    group.current.rotation.y += 0.004
  });

  return (
    <group ref={group} position={[0, -15, -50]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-10.89, 5.56, -21.56]} rotation={[0, 0, -0.04]}>
            <mesh
              geometry={nodes.Matrix_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
          <group position={[-2.22, 3.17, -14.56]} rotation={[0, 0, -0.19]}>
            <mesh
              geometry={nodes.Matrix_1_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
          <group position={[-10.56, 0.06, -20.37]}>
            <mesh
              geometry={nodes.Matrix_2_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
          <group position={[-9.54, 0.06, -8.64]}>
            <mesh
              geometry={nodes.Matrix_3_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
          <group position={[3.18, 0.06, -5.34]} rotation={[0, 0.15, 0]}>
            <mesh
              geometry={nodes.Matrix_4_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
          <group position={[4.53, 0.06, -24.37]} rotation={[0, -0.15, 0]}>
            <mesh
              geometry={nodes.Matrix_5_bulbasaur_material_0.geometry}
              material={materials.bulbasaur_material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/bulbasaur.glb');
