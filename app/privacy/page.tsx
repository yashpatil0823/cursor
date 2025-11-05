import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-6 md:space-y-8 text-gray-700">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company information and business details</li>
              <li>Information you provide when using our services</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              3. Information Sharing
            </h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              5. Cookies
            </h2>
            <p className="leading-relaxed">
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              6. Your Rights
            </h2>
            <p className="leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              7. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              8. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact page or email us at info@exporttrademart.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

