import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />

      {/* Hero Section with Port Background */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        {/* Background with gradient sky and port scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a237e] via-[#283593] to-[#000051]">
          {/* Stars/Twinkling effect */}
          <div className="absolute inset-0 opacity-30">
            {[10, 25, 45, 60, 75, 85, 15, 35, 55, 70, 20, 40, 65, 80, 30, 50, 90, 12, 38, 72].map((left, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${left}%`,
                  top: `${(i * 7) % 50}%`,
                  animationDelay: `${(i * 0.3) % 2}s`,
                  animationDuration: `${1 + (i % 3) * 0.3}s`
                }}
              />
            ))}
          </div>

          {/* Port Cranes Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] flex items-end justify-around px-4 md:px-16">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="relative flex items-end justify-center"
                style={{ width: `${100 / 6}%` }}
              >
                {/* Water reflection */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent blur-sm"></div>
                
                {/* Crane structure */}
                <div className="relative">
                  {/* Main mast */}
                  <div className="w-3 md:w-4 h-48 md:h-64 bg-gray-900 rounded-t-lg mx-auto shadow-2xl"></div>
                  
                  {/* Cross beam */}
                  <div 
                    className="absolute w-20 md:w-32 h-2 bg-gray-900 rounded shadow-xl"
                    style={{ 
                      bottom: '180px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${-10 + (i % 3) * 10}deg)`,
                      transformOrigin: 'left center'
                    }}
                  ></div>
                  
                  {/* Counterweight */}
                  <div className="absolute w-6 h-8 bg-gray-800 rounded bottom-[200px] left-1/2 -translate-x-1/2 shadow-lg"></div>
                  
                  {/* Crane lights */}
                  <div 
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg animate-pulse"
                    style={{ 
                      bottom: '170px',
                      left: '50%',
                      transform: `translateX(-${30 + (i % 2) * 40}px)`,
                      boxShadow: '0 0 10px rgba(255, 255, 0, 0.8)'
                    }}
                  ></div>
                  <div 
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg animate-pulse"
                    style={{ 
                      bottom: '170px',
                      left: '50%',
                      transform: `translateX(${30 + (i % 2) * 40}px)`,
                      boxShadow: '0 0 10px rgba(255, 255, 0, 0.8)',
                      animationDelay: '0.5s'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Horizon line */}
          <div className="absolute bottom-[200px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Water/Port area */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent">
            {/* Water ripples */}
            <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 Q360,40 720,60 T1440,60 L1440,120 L0,120 Z" fill="rgba(0,0,0,0.3)" opacity="0.5"/>
              <path d="M0,80 Q360,70 720,80 T1440,80 L1440,120 L0,120 Z" fill="rgba(0,0,0,0.2)" opacity="0.3"/>
            </svg>
          </div>

          {/* Atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex justify-center">
          <div className="text-center text-white px-4 max-w-4xl pt-16 sm:pt-20 md:pt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl">
              Global Trade Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 drop-shadow-lg px-2">
              Connecting Businesses Worldwide Through Excellence in Export & Import
            </p>
            <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
              <button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white font-bold uppercase px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg text-sm md:text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore Services
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold uppercase px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg text-sm md:text-base transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg className="w-full h-32" viewBox="0 0 1440 120" fill="none"
               xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                  fill="white"></path>
          </svg>
        </div>
      </section>

  {/* Additional Content Sections */}
  <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
              Why Choose Export Trade Mart ? 
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We specialize in facilitating seamless international trade operations with expertise, reliability, and global reach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">Global Network</h3>
              <p className="text-sm md:text-base text-gray-600">
                Extensive international connections to help your business expand across borders with confidence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">Fast & Efficient</h3>
              <p className="text-sm md:text-base text-gray-600">
                Streamlined processes and expert handling to ensure your shipments move quickly and safely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">Trusted Partnership</h3>
              <p className="text-sm md:text-base text-gray-600">
                Google Premier Partner certification ensures you&apos;re working with industry-leading experts.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1a237e] via-[#283593] to-[#1a237e] overflow-hidden">
        {/* Background with stars */}
        <div className="absolute inset-0 opacity-30">
          {[10, 25, 45, 60, 75, 85, 15, 35, 55, 70, 20, 40, 65, 80, 30, 50, 90, 12, 38, 72].map((left, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${left}%`,
                top: `${(i * 5) % 100}%`,
                animationDelay: `${(i * 0.3) % 2}s`,
                animationDuration: `${1 + (i % 3) * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 uppercase">
                REQUEST A CALL BACK
              </h2>
              <div className="w-20 h-1 bg-[#00bcd4] mb-8"></div>
              
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Rotating Globe */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 animate-spin-slow">
                  <Image
                    src="/images/globe.png"
                    alt="Global Network"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Buyers Table Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a237e] mb-2">
              OUR LATEST BUYER
            </h2>
            <div className="w-20 h-1 bg-[#00bcd4] mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Table Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-50 border-b">
              <div className="mb-4 sm:mb-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e]">
                  <option>10 records per page</option>
                  <option>20 records per page</option>
                  <option>50 records per page</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-gray-700 font-medium">Search:</label>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Product</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Quantity</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">City / State</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Country</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Abdul</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Tender Coconut</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">1 Twenty-Foot Container</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Dubai</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">🇦🇪 UAE</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded transition-colors">
                        Connect
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Abdul Sheikh</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Turmeric Powder</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">20 Tonne</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Dubai</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">🇦🇪 UAE</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded transition-colors">
                        Connect
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Abuthar</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Ponni Rice</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">20 metric tonne</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Manama</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">🇧🇭 Bahrain</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Deal Done</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded transition-colors">
                        Connect
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mohammed</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Green Banana</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">1 Twenty-Foot Container</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Qatar</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">🇦🇪 UAE</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded transition-colors">
                        Connect
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amadi</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Moringa Powder</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">20 Tonne</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">Addis Ababa</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">🇪🇹 Ethiopia</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded transition-colors">
                        Connect
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              OUR PARTNERS
            </h2>
            <div className="w-20 h-1 bg-[#00bcd4] mx-auto"></div>
            <p className="text-gray-600 mt-4">Trusted by leading global brands</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { name: "TechCorp", image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&q=80" },
              { name: "GlobalLogistics", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop&q=80" },
              { name: "TradeMaster", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop&q=80" },
              { name: "ExpoNet", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&q=80" },
              { name: "CargoWorld", image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=400&h=400&fit=crop&q=80" },
              { name: "ImportPro", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=400&fit=crop&q=80" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/91442874778"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Three Columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* About Company */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-white">EXP</span>
                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/globe.png"
                    alt="Globe"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-bold text-white">RT</span>
                <span className="text-2xl font-bold ml-2 text-white">TRADE MART</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We have been a prominent market presence for many years and are a reputed business that assists suppliers, manufacturers, and traders increase online sales
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold text-lg">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-400 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-6">Useful Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-[#00bcd4] transition-colors flex items-center text-sm">
                    <span className="mr-2">&gt;</span> FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/testimonial" className="text-gray-300 hover:text-[#00bcd4] transition-colors flex items-center text-sm">
                    <span className="mr-2">&gt;</span> Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-6">Contact Info</h4>
              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00bcd4] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[#00bcd4] mb-1">HEAD OFFICE</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Export Trade Mart, 4/803, Velachery - Tambaram Main Rd, Medavakkam, Chennai, Tamil Nadu 600100
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00bcd4] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[#00bcd4] mb-1">PHONE</p>
                    <p className="text-gray-300 text-sm">
                      <a href="tel:+914442874778" className="hover:text-[#00bcd4] transition-colors">(044)-4287-4778</a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <a href="tel:+919650169175" className="hover:text-[#00bcd4] transition-colors">+91 965-016-9175</a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00bcd4] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[#00bcd4] mb-1">EMAIL</p>
                    <p className="text-gray-300 text-sm">
                      <a href="mailto:info@exporttrademart.com" className="hover:text-[#00bcd4] transition-colors">info@exporttrademart.com</a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <a href="mailto:support@exporttrademart.com" className="hover:text-[#00bcd4] transition-colors">support@exporttrademart.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
              <p className="text-center md:text-left">
                © Export Trade Mart. | Powered by EXPORT TRADE MART, All Right Reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-[#00bcd4] transition-colors">Terms & Condition</Link>
                <span>/</span>
                <Link href="/privacy" className="hover:text-[#00bcd4] transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
