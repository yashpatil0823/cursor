import Image from "next/image";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
          alt="Global Trade"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              About IMPEX DOOR LLP
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Your Trusted Partner in Global Trade
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Welcome to IMPEX DOOR LLP
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                We are a leading global trade solutions provider, passionate about 
                facilitating seamless international business operations across borders.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With years of experience in the export and import industry, we specialize in connecting businesses 
                worldwide through excellence in trade management. Our expertise ensures that every transaction is 
                handled with precision, reliability, and the highest standards of service.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="International Trade"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Our mission is to empower businesses to expand globally by providing comprehensive trade solutions 
              that are efficient, transparent, and results-driven. We believe in building long-term partnerships 
              based on trust and mutual success.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Why Choose IMPEX DOOR LLP
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Industry Recognized</h3>
              <p className="text-gray-600">Google Premier Partner with industry recognized excellence</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Global Network</h3>
              <p className="text-gray-600">Extensive global network of trade partners</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Years of Experience</h3>
              <p className="text-gray-600">Decades of combined experience in international trade</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Efficient Processes</h3>
              <p className="text-gray-600">Streamlined processes for maximum efficiency</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and assistance</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Solutions</h3>
              <p className="text-gray-600">Tailored solutions for your specific needs</p>
            </div>
          </div>
        </div>

        {/* Company Values Image Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                alt="Global Business"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
