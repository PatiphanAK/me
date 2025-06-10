import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { ProfileCard } from "./Card"

const me = {
    image: "assets/me.jpg",
    title: "Patiphan Akkahadsri",
}

const cardDescription = `I am a student at KMITL, majoring in Information Technology on Software Development module.`

const favoriteTopic = [
    "Linear Algebra",
    "Calculus", 
    "Discrete Mathematics",
    "Probability and Statistics",
    "Differential Geometry",
    "Information Theory",
    "Vector Calculus",
    "Numerical Analysis",
    "Optimization",
    "Image Processing",
    "Computer Vision",
    "Digital Signal Processing",
]

const paragraphs = [
    "I am a currently a student at School of Information Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL).",
    `Throughout my time at KMITL, I've developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects`,
    `Driven by curiosity, I've explored more advanced topics such as`,
    `I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Ubuntu, 
    which gives me flexibility across different development ecosystems.`,
    `Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I'm also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,
    ` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`
]

// Color palette for different topic categories
const topicColors = [
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    "bg-gradient-to-r from-green-500 to-teal-500 text-white", 
    "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
    "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
    "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    "bg-gradient-to-r from-teal-500 to-green-500 text-white",
    "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
    "bg-gradient-to-r from-red-500 to-pink-500 text-white",
    "bg-gradient-to-r from-violet-500 to-purple-500 text-white",
    "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white",
]

function TopicBadge({ topic, colorClass }) {
    return (
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 ${colorClass}`}>
            {topic}
        </span>
    );
}

function HyperbolicParaboloid() {
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

function MathematicalAnalysis() {
    return (
        <div className="space-y-6">
            {/* LaTeX Equation */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📐</span>
                    Hyperbolic Paraboloid Equation
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-center text-lg border shadow-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">
                        z = y²/b² - x²/a²
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        where a = 3, b = 3
                    </div>
                </div>
            </div>

            {/* Surface Area Calculation */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📏</span>
                    Surface Area Analysis
                </h3>
                <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                            <div className="text-green-600 dark:text-green-400 font-bold">
                                ∂z/∂x = -2x/a², ∂z/∂y = 2y/b²
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                            <div className="text-green-600 dark:text-green-400 font-bold">
                                dS = √(1 + (∂z/∂x)² + (∂z/∂y)²) dx dy
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                            <div className="text-green-600 dark:text-green-400 font-bold">
                                dS = √(1 + 4x²/9 + 4y²/9) dx dy
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Volume Calculation */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Volume Under Surface
                </h3>
                <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                            <div className="text-orange-600 dark:text-orange-400 font-bold">
                                V = ∫∫ |y²/9 - x²/9| dx dy
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Region: [-3, 3] × [-3, 3]
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Positive Volume</div>
                            <div className="font-bold text-blue-600 dark:text-blue-400">≈ 24 units³</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Negative Volume</div>
                            <div className="font-bold text-red-600 dark:text-red-400">≈ -24 units³</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Properties */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">⚡</span>
                    Mathematical Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <div className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Curvature</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Saddle point at origin<br/>
                            Gaussian curvature: K = -4/(9(1 + 4r²/9)²)
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <div className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Asymptotes</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Hyperbolic curves:<br/>
                            y = ±x (when z = 0)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutMeAdditionalInfo() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl space-y-8 border border-gray-100 dark:border-gray-700">
            {/* Header with gradient text */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[0]}</p>
            </div>

            {/* Mathematical Interests */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    {paragraphs[1]}
                </p>
                <div className="flex flex-wrap gap-2">
                    {favoriteTopic.slice(0, 4).map((topic, index) => (
                        <TopicBadge key={topic} topic={topic} colorClass={topicColors[index]} />
                    ))}
                </div>
            </div>

            {/* Advanced Topics */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    {paragraphs[2]}
                </p>
                <div className="flex flex-wrap gap-2">
                    {favoriteTopic.slice(4).map((topic, index) => (
                        <TopicBadge key={topic} topic={topic} colorClass={topicColors[index + 4]} />
                    ))}
                </div>
            </div>

            {/* Systems Experience */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[3]}</p>
                </div>
            </div>

            {/* Coding Passion */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[4]}</p>
                </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[5]}</p>
                </div>
            </div>

            {/* Decorative element */}
            <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div className="px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12">
            <div className="flex flex-col xl:flex-row xl:gap-8 gap-8 items-start justify-center">
                {/* Left Column - Profile Card */}
                <div className="w-full xl:w-[30%] flex justify-center">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <ProfileCard
                            title={me.title}
                            description={cardDescription}
                            image={me.image}
                        />
                    </div>
                </div>
                
                {/* Middle Column - About Me Text */}
                <div className="w-full xl:w-[35%] flex justify-center">
                    <AboutMeAdditionalInfo />
                </div>
                
                {/* Right Column - Mathematical Visualization */}
                <div className="w-full xl:w-[35%] space-y-6">
                    {/* 3D Visualization */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">
                            🌊 Interactive Hyperbolic Paraboloid
                        </h3>
                        <HyperbolicParaboloid />
                    </div>
                    
                    {/* Mathematical Analysis */}
                    <MathematicalAnalysis />
                </div>
            </div>
        </div>
    );
}