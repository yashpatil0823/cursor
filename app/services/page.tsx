import Image from "next/image";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Services() {
  const productCategories = [
    {
      name: "Fruits and Vegetables",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
      description: "Fresh and high-quality fruits and vegetables for global export markets"
    },
    {
      name: "Readymade Garments",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      description: "Premium ready-made garments and apparel for international buyers"
    },
    {
      name: "Gems and Jewellery",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      description: "Exquisite gems and fine jewellery for export to global markets"
    },
    {
      name: "Chemical Products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      description: "High-grade chemical products and compounds for industrial use"
    },
    {
      name: "Pharmaceutical Products",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
      description: "Pharmaceutical products meeting international quality standards"
    },
    {
      name: "Organic Products",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      description: "Certified organic products for health-conscious global consumers"
    },
    {
      name: "Engineering Products",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Precision engineering products and machinery components"
    },
    {
      name: "Plastic Products",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      description: "High-quality plastic products and packaging solutions"
    },
    {
      name: "Spices Products",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
      description: "Premium spices and condiments for global culinary markets"
    },
    {
      name: "Textile Products",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      description: "Fine textiles and fabric products for international fashion industry"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
              Explore our comprehensive range of product categories for global buyers
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base md:text-lg lg:text-xl mb-1">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
