import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
          Contact Us
        </h1>
        
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <form className="space-y-5 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm md:text-base"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm md:text-base resize-y"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#00bcd4] hover:bg-[#00acc1] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl font-semibold text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Or reach out to us through:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="tel:(044)-4287-4778" className="text-[#00bcd4] hover:underline font-semibold text-sm md:text-base">
              (044)-4287-4778
            </a>
            <a href="mailto:contact@exporttrademart.com" className="text-[#00bcd4] hover:underline font-semibold text-sm md:text-base">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-8 md:py-12 mt-10 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs md:text-sm text-gray-400">
            <p>© 2024 Export Trade Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
