import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { contactConfig } from "../../config/contact";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-[#00bcd4] mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 uppercase">
            REQUEST A CALL BACK
          </h2>
          <div className="w-20 h-1 bg-[#00bcd4] mb-8"></div>
          
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] border border-gray-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] border border-gray-300"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] border border-gray-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] border border-gray-300"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] resize-none border border-gray-300"
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

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Or reach out to us through:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href={`tel:${contactConfig.phone.formatted}`} className="text-[#00bcd4] hover:underline font-semibold text-sm md:text-base">
              {contactConfig.phone.display}
            </a>
            <a href="mailto:contact@exporttrademart.com" className="text-[#00bcd4] hover:underline font-semibold text-sm md:text-base">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
