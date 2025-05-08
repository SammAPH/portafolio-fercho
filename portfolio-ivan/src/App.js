import React, { Suspense } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Contenido de la aplicación</p>

        <div style={{ width: '100%', height: '400px' }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} />
            <Suspense fallback={null}>
              <Model />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </div>
        <h2 className='myName'>
          HI I AM FERCHO!
        </h2>

      </main>
      <Footer />
    </div>
  );
}

export default App;
