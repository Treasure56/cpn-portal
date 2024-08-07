export default function WhyUs() {
  return (
    <section className="py-16 app-container bg-cpn-darkgreen text-neutral-50">
      <h3 className="font-bold text-lg pb-6 inline-flex items-center gap-2">
        <div className="w-8 h-[1px] rounded bg-white"></div>
        Reasons that make us the premier choice
      </h3>
      <div className="flex flex-col divide-y divide-[#fff2]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 md:gap-4 py-6 md:py-8">
            <h3 className="text-xl md:text-5xl font-bold pe-4 md:pe-10 flex-shrink-0">
              0{i + 1}.
            </h3>
            <div className="flex flex-col gap-1">
              <h4 className="font-[500] text-2xl">{item.title}</h4>
              <p className="text-sm opacity-70">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    title: `INTELLECT & EXPERIENCE`,
    body: `Highly skilled professionals who possess expertise in diverse
Business and Technology areas make up the CPMS team.
To provide world class service, we employ the best technicians,
adhere to proven methodology, provide superior client service and
become a true business partner in every project.
`,
  },
  {
    title: `COMMITMENT TO QUALITY`,
    body: `We believe in Quality service and our approach has been designed to
provide the same. We listen carefully to our clients and provide space,
time and materials according to agreement for the project. We are proud
of our Technical and Creative capability and this emerges from taking
time to get it right. Our Quality Assurance Department tests throughout
the process to ensure that the project will be successful.`,
  },
  {
    title: `ON TIME DELIVERY`,
    body: `We invest the time up-front to clearly understand your needs and then
manage projects to ensure they are delivered on time and within budget.
This methodology expedites rapid successful implementation, limits
uncertainty and keeps the customer always aware of development
progress at our end.`,
  },
  {
    title: `COMPETITIVE PRICING`,
    body: `We render services to our clients at a very competitive price and
depending on the type of client engagement we offer them the most
suitable pricing model structure which could either be xed price based ,
time and effort based or a dedicated offshore team model.
`,
  },
  {
    title: `TRACK RECORD
`,
    body: `We have handled small - large scale projects and have over the years
implemented solutions for numerous organizations of all sizes. Our
growing list of satised customers’ not only act as our excellent
references but are also a source of our repeat business. `,
  },
];
