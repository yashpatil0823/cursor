import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />

      <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Export Solutions", desc: "Comprehensive export services for international markets" },
              { title: "Import Services", desc: "Efficient import handling and customs clearance" },
              { title: "Logistics Management", desc: "End-to-end logistics and supply chain solutions" },
              { title: "Documentation", desc: "Complete documentation and compliance support" },
              { title: "Trade Consulting", desc: "Expert advice for global trade operations" },
              { title: "Custom Solutions", desc: "Tailored services for your specific needs" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
              </div>
            ))}
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
