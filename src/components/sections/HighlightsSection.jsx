import React from "react";

const highlights = [
  {
    title: "Total Clients",
    stat: "1,700+",
    desc: "Global Clients Across 4 Key Regions: North America, Europe, Asia Pacific & Latin America",
  },
  {
    title: "Go-To Choice",
    stat: "88%",
    desc: "of the Fortune 100 & 70% of the Fortune 500 Proudly Served Worldwide",
  },
  {
    title: "Projects Completed",
    stat: "340,000+",
    desc: "Projects Completed—Each one a Testament to our Commitment to Agility and Expertise",
  },
  {
    title: "Global Reach",
    stat: "37+",
    desc: "Countries in Which our Clients are Served With a Dedicated Team Ready to Tackle your Biggest Challenges",
  },
];

function HighlightsSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="uppercase text-sm tracking-widest font-semibold text-gray-600 mb-3">
            Key Highlights
          </h3>
          <h2 className="text-4xl font-bold mb-6 text-black">
            Changing Business for the Better
          </h2>
          <div className="flex gap-6">
            <img src="/awards/forbes.png" alt="Forbes" className="h-20" />
            <img src="/awards/usnews.png" alt="US News" className="h-20" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold uppercase text-gray-600 mb-1">
                {item.title}
              </h4>
              <p className="text-3xl font-bold text-teal-600 mb-2">
                {item.stat}
              </p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
