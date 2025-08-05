export default function Execute() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto px-6 py-12 max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
          Execute
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-gray-300 text-center mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
            Transform knowledge into action through practical implementation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                Project-Based Learning
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                Apply your knowledge through real-world projects that matter. Build a portfolio that demonstrates your capabilities.
              </p>
              <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                <li>• Real-world scenarios</li>
                <li>• Portfolio development</li>
                <li>• Industry partnerships</li>
              </ul>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                Innovation Labs
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                Access state-of-the-art facilities and tools to bring your ideas to life in our innovation laboratories.
              </p>
              <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                <li>• Cutting-edge technology</li>
                <li>• Collaborative workspace</li>
                <li>• Rapid prototyping</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
              Execution Framework
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="text-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="text-3xl mb-2">1</div>
                <div>Plan</div>
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="text-3xl mb-2">2</div>
                <div>Build</div>
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="text-3xl mb-2">3</div>
                <div>Test</div>
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="text-3xl mb-2">4</div>
                <div>Deploy</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Times New Roman, serif' }}>
              Start Executing
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
