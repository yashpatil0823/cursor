import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Us
        </h1>
        
        <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          <p>
            Welcome to Export Trade Mart! We are a leading global trade solutions provider, passionate about 
            facilitating seamless international business operations across borders.
          </p>
          
          <p>
            With years of experience in the export and import industry, we specialize in connecting businesses 
            worldwide through excellence in trade management. Our expertise ensures that every transaction is 
            handled with precision, reliability, and the highest standards of service.
          </p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 md:mt-12 mb-4 md:mb-6 text-blue-800">
            Our Mission
          </h2>
          
          <p>
            Our mission is to empower businesses to expand globally by providing comprehensive trade solutions 
            that are efficient, transparent, and results-driven. We believe in building long-term partnerships 
            based on trust and mutual success.
          </p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 md:mt-12 mb-4 md:mb-6 text-blue-800">
            Why Choose Us
          </h2>
          
          <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4 text-sm sm:text-base">
            <li>Google Premier Partner - Industry recognized excellence</li>
            <li>Extensive global network of trade partners</li>
            <li>Decades of combined experience in international trade</li>
            <li>Streamlined processes for maximum efficiency</li>
            <li>24/7 customer support and assistance</li>
            <li>Customized solutions for your specific needs</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
