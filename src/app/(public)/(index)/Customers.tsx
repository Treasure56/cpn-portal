/* eslint-disable @next/next/no-img-element */
export default function Customers() {
  return (
    <section className="relative h-60 py-10">
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
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
];
