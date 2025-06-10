import { MathJax, MathJaxContext } from "better-react-mathjax";
const config = {
  loader: { load: ["input/tex", "output/chtml"] },
};
export function MathematicalAnalysis() {
  return (
    <MathJaxContext config={config}>
      <div className="space-y-6">
        {/* Equation */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📐</span>
            Hyperbolic Paraboloid Equation
          </h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-center text-lg border shadow-sm">
            <MathJax className="text-blue-600 dark:text-blue-400 font-bold">
              {"\\( z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2} \\)"}
            </MathJax>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              where \( a = 3, b = 3 \)
            </div>
          </div>
        </div>

        {/* Surface Area */}
        <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📏</span>
            Surface Area Analysis
          </h3>
          <div className="space-y-3">
            {[
              "\\( \\frac{\\partial z}{\\partial x} = -\\frac{2x}{a^2}, \\quad \\frac{\\partial z}{\\partial y} = \\frac{2y}{b^2} \\)",
              "\\( dS = \\sqrt{1 + \\left(\\frac{\\partial z}{\\partial x}\\right)^2 + \\left(\\frac{\\partial z}{\\partial y}\\right)^2} \\, dx \\, dy \\)",
              "\\( dS = \\sqrt{1 + \\frac{4x^2}{9} + \\frac{4y^2}{9}} \\, dx \\, dy \\)",
            ].map((eq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <MathJax className="font-mono text-sm text-green-600 dark:text-green-400 font-bold">
                  {eq}
                </MathJax>
              </div>
            ))}
          </div>
        </div>

        {/* Volume */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📊</span>
            Volume Under Surface
          </h3>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <MathJax className="font-mono text-sm text-orange-600 dark:text-orange-400 font-bold">
                {"\\( V = \\iint |\\frac{y^2}{9} - \\frac{x^2}{9}| \\, dx \\, dy \\)"}
              </MathJax>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Region: \([-3, 3] \\times [-3, 3]\)
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Positive Volume
                </div>
                <div className="font-bold text-blue-600 dark:text-blue-400">
                  ≈ 24 units³
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Negative Volume
                </div>
                <div className="font-bold text-red-600 dark:text-red-400">
                  ≈ -24 units³
                </div>
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
              <div className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                Curvature
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Saddle point at origin<br />
                <MathJax>
                  {"\\( K = -\\frac{4}{9(1 + \\frac{4r^2}{9})^2} \\)"}
                </MathJax>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                Asymptotes
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Hyperbolic curves:<br />
                <MathJax>{"\\( y = \\pm x \\quad \\text{(when } z = 0 \\text{)} \\)"}</MathJax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}