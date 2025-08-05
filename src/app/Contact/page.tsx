export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
          Contact
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 text-center mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            Get in touch with us. We'd love to hear from you.
          </p>
          
          <div className="text-center text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@leon.com</p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}