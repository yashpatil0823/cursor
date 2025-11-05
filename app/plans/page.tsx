import Link from "next/link";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Access to basic buyer data",
        "50 verified leads per month",
        "Email support",
        "Basic search filters",
        "Standard buyer profiles"
      ],
      popular: false
    },
    {
      name: "Plus",
      price: "$79",
      period: "/month",
      features: [
        "Access to premium buyer data",
        "200 verified leads per month",
        "Priority email support",
        "Advanced search filters",
        "Detailed buyer profiles",
        "Export capabilities"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      features: [
        "Access to all buyer data",
        "Unlimited verified leads",
        "24/7 phone & email support",
        "Premium search filters",
        "Complete buyer profiles",
        "Advanced export capabilities",
        "Custom reports",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Our Plans
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl shadow-lg p-8 flex flex-col ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full text-center mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
