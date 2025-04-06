import React from 'react'

const news = [
    {
      date: "October 16, 2024",
      title:
        "RGP Recognized by Forbes, U.S. News & World Report",
    },
    {
      date: "July 1, 2024",
      title:
        "RGP Releases Latest Pulse Survey on Workforce Investment Priorities",
    },
    {
      date: "April 4, 2024",
      title:
        "RGP Outlines Progress on Key Corporate Responsibility Initiatives",
    },
  ];
  
function NewsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
      <div>
        <h3 className="uppercase text-sm tracking-widest font-semibold text-gray-600">
          What’s Happening
        </h3>
        <h2 className="text-3xl font-bold mt-2 mb-4 text-black">Reet In the News</h2>
        {/* <Button variant="ghost" className="text-black p-0 gap-2">
          See All <ArrowRight size={18} />
        </Button> */}
      </div>
      <div className="md:col-span-2 space-y-10">
        {news.map((item, index) => (
          <div key={index} className="border-b pb-6">
            <p className="text-sm uppercase text-gray-500 mb-2">{item.date}</p>
            <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
            {/* <Button variant="ghost" className="text-black p-0 gap-2">
              Read More <ArrowRight size={16} />
            </Button> */}
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default NewsSection