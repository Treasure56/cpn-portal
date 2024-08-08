/* eslint-disable @next/next/no-img-element */
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="Contact" className="py-16 app-container bg-black relative">
      <img
        src="/images/contact.jpeg"
        alt="contact us"
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <div className="grid md:grid-cols-2 relative">
        <div className="bg-white backdrop-blur-sm border p-6 rounded-lg shadow-xl">
          <h3 className="text-2xl md:text-4xl font-semibold pb-4">
            Contact Us
          </h3>
          <p className="text-neutral-500">
            In view of the multidisciplinary nature of IT, our team has been
            carefully selected to include IT Professionals whose skills
            complement each other in a synergistic manner. Another key attribute
            of our team is that they always keep abreast of the latest trends
            and developments in Information Technologies.
          </p>
          <div className="pt-6 flex flex-col gap-3 text-neutral-500">
            <div className="flex gap-2 items-start">
              <FaLocationDot />
              <p>
                ASTA Gallery Plaza, Plot 1185 Cadastral Zone B06 Mabushi
                District, Abuja - Nigeria.
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <FaPhone />
              <p>
                <a
                  href="tel:08033384978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cpn-darkgreen"
                >
                  0803 338 4978
                </a>
                <br />
                <a
                  href="tel:09038624006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cpn-darkgreen"
                >
                  0903 862 4006
                </a>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <FaEnvelope />
              <p>
                <a
                  href="mailto:info@cpms.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cpn-darkgreen"
                >
                  info@cpms.com.ng
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
