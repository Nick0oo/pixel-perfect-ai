const TrustedBySection = () => {
  const companies = [
    { name: "Google", style: "font-sans" },
    { name: "airbnb", style: "font-sans" },
    { name: "Creative", style: "italic" },
    { name: "Shopify", style: "font-sans" },
    { name: "amazon", style: "font-sans" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by greatest companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <span
              key={index}
              className={`company-logo ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
