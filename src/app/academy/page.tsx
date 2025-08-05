import Link from "next/link";

export default function Academy() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto px-6 py-12 max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
          LEON Academy
        </h1>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-300 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
            Master the four pillars of modern education and unlock your potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Learn */}
          <Link href="/academy/learn" className="group">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 hover:border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Learn
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Master fundamentals through innovative methodologies
                </p>
              </div>
            </div>
          </Link>

          {/* Execute */}
          <Link href="/academy/execute" className="group">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 hover:border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Execute
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Transform knowledge into action through practice
                </p>
              </div>
            </div>
          </Link>

          {/* Organize */}
          <Link href="/academy/organize" className="group">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 hover:border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">🗂️</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Organize
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Structure your journey for maximum impact
                </p>
              </div>
            </div>
          </Link>

          {/* Network */}
          <Link href="/academy/network" className="group">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 hover:border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Network
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Connect with like-minded learners worldwide
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
            Ready to revolutionize your learning experience?
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Times New Roman, serif' }}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}