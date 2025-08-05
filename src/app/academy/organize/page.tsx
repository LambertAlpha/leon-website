export default function Organize() {
    return (
      <main className="min-h-screen">
        <div className="mx-auto px-6 py-12 max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
            Organize
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-300 text-center mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
              Structure your learning journey for maximum impact and efficiency
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Personal Learning System
                </h3>
                <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Develop a personalized system that keeps you on track and maximizes your learning potential.
                </p>
                <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <li>• Goal setting framework</li>
                  <li>• Progress tracking</li>
                  <li>• Time management tools</li>
                </ul>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Knowledge Management
                </h3>
                <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Master the art of organizing and connecting information for better retention and application.
                </p>
                <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <li>• Digital organization tools</li>
                  <li>• Note-taking systems</li>
                  <li>• Knowledge synthesis</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
                Organization Principles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Structure</h4>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Create clear frameworks for your learning materials and goals
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔗</div>
                  <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Connect</h4>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Link concepts across different domains for deeper understanding
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Focus</h4>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Prioritize what matters most for your learning objectives
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Times New Roman, serif' }}>
                Get Organized
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  