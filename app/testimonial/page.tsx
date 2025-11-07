import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Testimonial() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Client Testimonials
        </h1>
        
        <div className="space-y-6 md:space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                AS
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Abdul Sheikh</h3>
                <p className="text-gray-600 text-sm">Dubai, UAE</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              &quot;IMPEX DOOR LLP has been instrumental in expanding our business across borders. Their professional team ensured our turmeric powder shipments reached Dubai on time. Highly recommended for anyone looking to export to the Middle East!&quot;
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                AM
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Amadi</h3>
                <p className="text-gray-600 text-sm">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              &quot;Working with IMPEX DOOR LLP for our Moringa Powder export has been a game-changer. Their expertise in documentation and logistics saved us valuable time and resources. Excellent service from start to finish!&quot;
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                AB
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Abuthar</h3>
                <p className="text-gray-600 text-sm">Manama, Bahrain</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              &quot;The Ponni Rice deal through IMPEX DOOR LLP was completed successfully. Their transparent process and reliable communication kept us informed at every step. We&apos;re definitely coming back for more business!&quot;
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                MM
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Mohammed</h3>
                <p className="text-gray-600 text-sm">Qatar</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              &quot;IMPEX DOOR LLP&apos;s global network really impressed us. They connected us with the right buyers for our Green Banana exports. Their team is knowledgeable and always ready to help. Outstanding service!&quot;
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

