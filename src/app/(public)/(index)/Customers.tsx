/* eslint-disable @next/next/no-img-element */
export default function Customers() {
  return (
    <section className="relative h-60 py-4">
      <div className="absolute h-full top-0 w left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute h-full top-0 w right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="relative w-full h-full scroll-container z-0 overflow-hidden">
        <div className="carousel-primary">
          {brands.map((brand, i) => (
            <img key={i} src={brand} alt="Brand Logo" />
          ))}
        </div>
        <div className="carousel-primary carousel-secondary">
          {brands.map((brand, i) => (
            <img key={i} src={brand} alt="Brand Logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

const brands = [
  "/images/companies/abumet.png",
  "/images/companies/apdc.png",
  "/images/companies/echolab.png",
  "/images/companies/eedc.png",
  "/images/companies/fmf.png",
  "/images/companies/hyson.png",
  "/images/companies/nti.png",
  "/images/companies/paldium.png",
  "/images/companies/sfh.png",
  "/images/companies/tha.png",
  "/images/companies/unicef.png",
];
