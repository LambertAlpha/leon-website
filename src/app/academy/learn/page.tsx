export default function Learn() {
    return (
      <main className="min-h-screen">
        <div className="mx-auto px-6 py-12 max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
            Learn
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-300 text-center mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
              Master the fundamentals through innovative learning methodologies
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Interactive Courses
                </h3>
                <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Engage with cutting-edge content designed for the modern learner. Our interactive courses adapt to your learning style.
                </p>
                <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <li>• Personalized learning paths</li>
                  <li>• Real-time feedback</li>
                  <li>• Hands-on projects</li>
                </ul>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Expert Mentorship
                </h3>
                <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Learn from industry leaders who have shaped the future of education and technology.
                </p>
                <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <li>• One-on-one guidance</li>
                  <li>• Industry insights</li>
                  <li>• Career development</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Times New Roman, serif' }}>
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  