import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo 部分 */}
        <div className="flex items-left">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* 导航链接部分 */}
        <div className="flex items-center space-x-12">
        <Link 
            href="/" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Home
          </Link>
          {/* Academy 下拉菜单 */}
          <div className="relative group">
            <Link 
              href="/academy" 
              className="text-white hover:text-gray-300 transition-colors duration-200 text-lg flex items-center"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Academy
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* 下拉菜单 */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <Link 
                  href="/academy/learn" 
                  className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📚</span>
                    <div>
                      <div className="font-semibold">Learn</div>
                      <div className="text-sm text-gray-300">Master fundamentals</div>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="/academy/execute" 
                  className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <div>
                      <div className="font-semibold">Execute</div>
                      <div className="text-sm text-gray-300">Transform to action</div>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="/academy/organize" 
                  className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🗂️</span>
                    <div>
                      <div className="font-semibold">Organize</div>
                      <div className="text-sm text-gray-300">Structure your journey</div>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="/academy/network" 
                  className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    <div>
                      <div className="font-semibold">Network</div>
                      <div className="text-sm text-gray-300">Connect worldwide</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >     
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
