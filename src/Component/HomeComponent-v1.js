import React from 'react'

export default function HomeComponent() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-90 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-red-500">JioHostar</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-500">TV</a>
            <a href="#" className="hover:text-red-500">Movies</a>
            <a href="#" className="hover:text-red-500">Sports</a>
            <a href="#" className="hover:text-red-500">Premium</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded">
            Subscribe
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Banner (Like Hotstar) */}
      <div className="relative h-96 bg-gradient-to-r from-black via-gray-900 to-black">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2511/1452511-h-9c8d7c7e4b1b"
          alt="Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute bottom-20 left-10 max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Special Movie</h1>
          <p className="text-lg mb-6">Watch the latest blockbuster now!</p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium">
            Watch Now
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Popular Shows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition">
              <img
                src={`https://via.placeholder.com/300x170?text=Show+${item}`}
                alt={`Show ${item}`}
                className="w-full h-auto"
              />
              <div className="p-3">
                <h3 className="font-medium">Show Title {item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 px-6 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-red-500 mb-4">JioHostar</h3>
              <p>© 2024 JioHostar. All Rights Reserved.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-red-500">About Us</a></li>
                  <li><a href="#" className="hover:text-red-500">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Help</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-red-500">FAQ</a></li>
                  <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}