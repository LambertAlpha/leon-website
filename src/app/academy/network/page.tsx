export default function Network() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto px-6 py-12 max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
          Network
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-gray-300 text-center mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
            Connect with like-minded learners and industry professionals
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                Global Community
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                Join a worldwide network of innovators, entrepreneurs, and thought leaders who share your passion for learning.
              </p>
              <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                <li>• International connections</li>
                <li>• Cultural exchange</li>
                <li>• Diverse perspectives</li>
              </ul>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                Professional Partnerships
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                Build meaningful relationships with industry experts and potential collaborators for your future projects.
              </p>
              <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                <li>• Industry mentors</li>
                <li>• Collaboration opportunities</li>
                <li>• Career advancement</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600 mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
              Networking Features
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">💬</div>
                <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Forums</h4>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Engage in discussions
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Meetups</h4>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Local and virtual events
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">👥</div>
                <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Groups</h4>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Interest-based communities
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📧</div>
                <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Direct</h4>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                  One-on-one connections
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Times New Roman, serif' }}>
              Join Network
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}