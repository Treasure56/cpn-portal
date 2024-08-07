import { Navbar } from "@/components/navbar";
import Hero from "./Hero";
import Customers from "./Customers";
import About from "./About";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Customers />
      <About />
      <WhyUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
