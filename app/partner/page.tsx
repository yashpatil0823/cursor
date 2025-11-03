import Link from "next/link";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Partner() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />

      <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Partner With Us
          </h1>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Join our network of trusted partners and expand your global reach. We offer mutually beneficial partnerships for businesses looking to grow internationally.
            </p>
            <Link href="/contact" className="inline-block bg-[#00bcd4] hover:bg-[#00acc1] text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base text-center">
              Get Started
            </Link>
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
