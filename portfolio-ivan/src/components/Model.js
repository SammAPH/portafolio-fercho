import React, { useEffect, useState } from 'react';
//import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function Model() {
  const [model, setModel] = useState();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath('/models/');
    mtlLoader.load('Techno_Bunny_Explorer_0507000751_texture.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('/models/');
      objLoader.load('Techno_Bunny_Explorer_0507000751_texture.obj', (object) => {
        setModel(object);
      });
    });
  }, []);

  return model ? <primitive object={model} /> : null;
}
