import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="relative h-[40em] md:h-[90vh] w-full">
      <img
        src="/images/hero-bg.jpg"
        alt="background image"
        className="h-full w-full absolute top-0 left-0 bg-cpn-darkgreen opacity-50"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-white via-transparent to-white" />
      <div className="app-container h-full w-full absolute top-0 left-0 py-10">
        <div className="flex max-md:flex-col gap-6 h-full">
          <div className="w-full md:w-5/12 flex flex-col gap-4 justify-center items-center md:items-start max-md:text-center h-full">
            <h1 className="text-cpn-darkgreen text-4xl md:text-6xl font-semibold">
              Your trusted partner for IT and tech solutions
            </h1>
            <h2 className="text-neutral-700 text-lg md:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              eum ab ad dicta doloremque nostrum facere officia error, sunt ex?
            </h2>
            <Link
              href="#Services"
              className="btn-primary !px-10 !bg-cpn-darkgreen !border-cpn-darkgreen !rounded-[40px]"
            >
              Our Services
              <BsArrowDown />
            </Link>
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-4 justify-center items-center h-full">
            {images.map((v, i) => (
              <img
                key={i}
                src={v}
                alt="networking"
                className={`hero-img ${
                  i == 1 ? "md:left-[4%] max-md:!w-full" : "md:right-[4%]"
                } `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const images = [
  "/images/networking.avif",
  "/images/networking.avif",
  "/images/networking.avif",
];
