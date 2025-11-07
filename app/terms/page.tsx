import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <div className="space-y-6 md:space-y-8 text-gray-700">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using IMPEX DOOR LLP&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              2. Use License
            </h2>
            <p className="leading-relaxed mb-3">
              Permission is granted to temporarily access the materials on IMPEX DOOR LLP&apos;s website for personal, non-commercial transitory viewing only.
            </p>
            <p className="leading-relaxed">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by IMPEX DOOR LLP at any time.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              3. Disclaimer
            </h2>
            <p className="leading-relaxed">
              The materials on IMPEX DOOR LLP&apos;s website are provided on an &apos;as is&apos; basis. IMPEX DOOR LLP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              4. Limitations
            </h2>
            <p className="leading-relaxed">
              In no event shall IMPEX DOOR LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IMPEX DOOR LLP&apos;s website.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              5. Revisions and Errata
            </h2>
            <p className="leading-relaxed">
              The materials appearing on IMPEX DOOR LLP&apos;s website could include technical, typographical, or photographic errors. IMPEX DOOR LLP does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              6. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us through our contact page or email us at info@impexdoor.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

