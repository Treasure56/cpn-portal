/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <section id="Services" className="py-16 app-container">
      <h3 className="font-bold text-lg pb-6 inline-flex items-center gap-2">
        <div className="w-8 h-[1px] rounded bg-cpn-darkgreen"></div>
        Our Services: Comprehensive IT Solutions
      </h3>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full h-full rounded-lg overflow-hidden bg-neutral-100 flex flex-col gap-2 pb-4"
          >
            <img
              src={item.img}
              className="w-full aspect-[3/2] object-cover"
              alt={item.title}
            />
            <h4 className="font-[500] text-lg px-4">{item.title}</h4>
            {typeof item.value === "string" ? (
              <p className="text-neutral-600 px-4">{item.value}</p>
            ) : (
              <ul className=" px-4">
                {item.value.map((v, i) => (
                  <li className="text-neutral-600 list-disc ml-3" key={i}>
                    {v}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    img: "/images/services/it.webp",
    title: "IT Infrastructure & Security Management ",
    value: [
      "Networking Solutions.",
      "Linux Solutions.",
      "Email Solutions",
      "Managed Dedicated Server",
      "Managed VPS Server",
      "Server Management",
      "Server Monitoring",
      "Server Security Management",
      "Firewall Security Solution.",
    ],
  },
  {
    img: "/images/services/web.avif",
    title: "Web Solutions",
    value: [
      "Domain Name Registration",
      "Linux & Windows Web Hosting.",
      "Application Web Hosting",
      "WordPress Hosting",
      "Magento E-Commerce Hosting",
      "Website Designing.",
      "Software Application.",
      "Mobile App Development",
      "Search Engine Optimization.",
    ],
  },
  {
    img: "/images/services/business.jpeg",
    title: "Business Ready Solutions",
    value: [
      "E-Commerce Solutions.",
      "HR Management Software",
      "ERP Solutions",
      "CRM Solutions.",
      "Hotel Management Software.",
      "School Management Software",
      "Hospital Management Software.",
      "Website with CMS Corporate Trainings IT Security Consultancy Services.",
    ],
  },
  {
    img: "/images/services/coporate.avif",
    title: "Corporate Trainings ",
    value: `Any solution provided becomes obsolete if doesn't impact your
primary objective- YOUR BUISNESS OUTCOMES. To mention a
few, whether it's maximizing the productivity of your employees or
improving the quality and capabilities of company personnel- all
our interventions have one common DNA i.e. impacting business
outcome. Over the years, Center Point Multi Solutions Limited has
championed the art of impacting business of global clients across
multiple sectors through its customized IT security training
programs. Our corporate training programs provide holistic
solutions related to networking and security and we are committed
to a philosophy of excellence. `,
  },
  {
    img: "/images/services/it-power.avif",
    title: "IT Power",
    value: `A reliable uninterruptible power supply is non-negotiable for IT
infrastructure. We understand that time is paramount, especially
when it comes to eliminating downtime and maximizing the life of
your backup power solution.
Our IT power solution shall be tailored to t your company's unique
requirements and infrastructure. We take a proactive approach
from selection and implementation to maintenance and upkeep.
`,
  },
  {
    img: "/images/services/ecommerce.avif",
    title: "Business Ready Solutions",
    value: [
      "E-Commerce Solutions.",
      "HR Management Software",
      "ERP Solutions",
      "CRM Solutions.",
      "Hotel Management Software.",
      "School Management Software",
      "Hospital Management Software.",
      "Website with CMS Corporate Trainings IT Security Consultancy Services.",
    ],
  },
  {
    img: "/images/services/consult.webp",
    title: "Consultancy Services ",
    value: [
      "Comprehensive penetration test.",
      "Application penetration test.",
      "Web services assessments.",
      "Source code audits.",
      "Wireless penetration test.",
      "Leading edge technology test.",
      "Security architecture review.",
      "Vulnerability assessments.",
    ],
  },
  {
    img: "/images/services/seo.avif",
    title: "Search Engine Optimization",
    value: `(Get found on the rst page on Google, Yahoo, Bing and all other
search engine) Local Search Strategy Map Search Optimization
Link Building & Content Optimization, Social Media Optimization
(Promotions in Facebook, Twitter, Linkedin, Google+)
`,
  },
  {
    img: "/images/services/advert.avif",
    title: "Paid Search Advertising",
    value: `(Paid listings on Google AdWords and Microsoft adCenter can get
your site visible to searchers within days.)

`,
  },
];
