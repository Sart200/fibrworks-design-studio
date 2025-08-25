
const TrustSection = () => {
  const companies = [
    "Forbes", "PepsiCo", "INCRAM", "Pearson", "Bridgestone", 
    "TATA DIGITAL", "S&P Global", "Klarna", "Forbes", "PepsiCo"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            TRUSTED BY 73,000+ BUSINESSES WORLDWIDE
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-12 overflow-hidden">
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <span className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
