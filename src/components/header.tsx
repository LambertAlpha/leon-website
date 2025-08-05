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
          <Link 
            href="/academy" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Academy
          </Link>
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
