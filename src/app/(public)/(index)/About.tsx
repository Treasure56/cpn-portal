/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section id="About" className="app-container py-12">
      <h3 className="font-bold text-lg pb-6 inline-flex items-center gap-2">
        <div className="w-8 h-[1px] rounded bg-cpn-darkgreen"></div>
        About Us
      </h3>
      <div className="flex flex-col gap-6">
        <div className="flex max-md:flex-col gap-6 items-stretch">
          <img
            src="/images/about.png"
            alt="About Center Point Network"
            className="w-full md:w-4/12 rounded-3xl object-cover"
          />
          <div className="w-full md:w-8/12 bg-neutral-100 rounded-3xl p-4 flex flex-col justify-center gap-3">
            <h3 className="font-semibold text-xl md:text-2xl">
              Our Business is about Technology, Yes. It&apos;s also about
              Operations and Customer Relationships
            </h3>
            <p className="text-neutral-500 text-sm">
              Center Point Multi Solutions Limited is an Information Technology
              company with its core focus on information technology solutions
              and deployment, with a growing clientele base ranging from
              government parastatals, corporate organizations, the Oil and Gas
              sector, small & Medium scale enterprise (SME), Retail Outlets of
              Computers & IT equipment for all and sundry.
            </p>
            <p className="text-neutral-500 text-sm">
              We are committed to meeting the information technology needs of
              our clients by providing frst class and leading-edge technology
              that differentiates us from others. Our business paradigm begins
              with the analysis of the clients existing business processes, with
              the aim of bringing the most effcient workfow solutions.
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-6 items-stretch">
          <div className="w-full md:w-3/12 bg-neutral-100 rounded-3xl p-4 flex flex-col justify-center gap-3">
            <h3 className="font-semibold text-xl md:text-2xl">Our Vision</h3>
            <p className="text-neutral-500 text-sm">
              To be among one of Africa&apos;s top business and tech solution
              house by ensuring that all the solution we develop are feature
              complete, secure, and scalable while providing a total ICT
              possibilities.
            </p>
          </div>
          <div className="w-full md:w-6/12 rounded-3xl flex flex-col items-center justify-center gap-2 border p-4">
            <h3 className="font-semibold text-xl text-center md:text-2xl">
              Our Core Values
            </h3>
            <img
              src="/images/core-values.png"
              alt="About Center Point Network"
              className="w-[95%] object-contain"
            />
          </div>
          <div className="w-full md:w-3/12 bg-neutral-800 text-white rounded-3xl p-4 flex flex-col justify-center gap-3">
            <h3 className="font-semibold text-xl md:text-2xl">Our Mission</h3>
            <ul className="text-neutral-200 text-sm">
              <li>
                To provide the best solutions that exceeds the client&apos;s
                expectations and meets their increasing technology challenges
                and business demands.
              </li>
              <li>
                To consistently deliver fast and reliable services to our
                customers through experienced and motivated people aided by
                progressive technology.
              </li>
              <li>To generate exceptional returns to stakeholders.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
