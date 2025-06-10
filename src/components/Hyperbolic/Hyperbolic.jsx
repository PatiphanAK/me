import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
export function HyperbolicParaboloid() {
    const mountRef = useRef();
    const [error, setError] = React.useState(null);
  
    useEffect(() => {
      try {
        if (!mountRef.current) return;
        
        // Wait for the container to be fully rendered
        const timer = setTimeout(() => {
          if (!mountRef.current) return;
          
          const width = mountRef.current.clientWidth || 400;
          const height = mountRef.current.clientHeight || 300;
    
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
          camera.position.set(0, -10, 10);
          camera.lookAt(0, 0, 0);
    
          const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
          renderer.setSize(width, height);
          renderer.setClearColor(0x000000, 0);
          
          // Clear any existing canvas
          while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
          }
          
          mountRef.current.appendChild(renderer.domElement);
    
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
          scene.add(ambientLight);
          const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
          directionalLight.position.set(5, 5, 5);
          scene.add(directionalLight);
    
          const a = 3;
          const b = 3;
          const segments = 50;
          const size = 6;
    
          const geometry = new THREE.BufferGeometry();
          const vertices = [];
    
          for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * size - size / 2;
            for (let j = 0; j <= segments; j++) {
              const y = (j / segments) * size - size / 2;
              const z = (y * y) / (b * b) - (x * x) / (a * a);
              vertices.push(x, y, z);
            }
          }
    
          const positions = new Float32Array(vertices);
          geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
          const indices = [];
          for (let i = 0; i < segments; i++) {
            for (let j = 0; j < segments; j++) {
              const a1 = i * (segments + 1) + j;
              const b1 = i * (segments + 1) + j + 1;
              const c1 = (i + 1) * (segments + 1) + j;
              const d1 = (i + 1) * (segments + 1) + j + 1;
    
              indices.push(a1, b1, d1);
              indices.push(a1, d1, c1);
            }
          }
    
          geometry.setIndex(indices);
          geometry.computeVertexNormals();
    
          const material = new THREE.MeshStandardMaterial({
            color: 0x5a86ff,
            side: THREE.DoubleSide,
            flatShading: false,
            transparent: true,
            opacity: 0.85,
          });
    
          const mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);
    
          let animationId;
          const animate = () => {
            if (!mountRef.current) return;
            animationId = requestAnimationFrame(animate);
            mesh.rotation.z += 0.005;
            mesh.rotation.x += 0.002;
            renderer.render(scene, camera);
          };
    
          animate();
    
          const handleResize = () => {
            if (!mountRef.current) return;
            
            const newWidth = mountRef.current.clientWidth || 400;
            const newHeight = mountRef.current.clientHeight || 300;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
          };
    
          window.addEventListener('resize', handleResize);
    
          // Store cleanup function
          mountRef.current._cleanup = () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
              cancelAnimationFrame(animationId);
            }
            if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
              mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
          };
        }, 100);
        
        return () => {
          clearTimeout(timer);
          if (mountRef.current && mountRef.current._cleanup) {
            mountRef.current._cleanup();
          }
        };
      } catch (err) {
        console.error('Error in HyperbolicParaboloid:', err);
        setError(err.message);
      }
    }, []);
  
    if (error) {
      return (
        <div
          style={{ 
            width: "100%", 
            height: "300px", 
            borderRadius: "16px", 
            background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
            overflow: "hidden",
            border: "2px solid rgba(90, 134, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "20px"
          }}
        >
          <div>
            <div className="text-lg mb-2">⚠️ 3D Visualization Error</div>
            <div className="text-sm opacity-75">Mathematical equations shown below</div>
          </div>
        </div>
      );
    }
  
    return (
      <div
        ref={mountRef}
        style={{ 
          width: "100%", 
          height: "300px", 
          borderRadius: "16px", 
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
          overflow: "hidden",
          border: "2px solid rgba(90, 134, 255, 0.3)"
        }}
      />
    );
}