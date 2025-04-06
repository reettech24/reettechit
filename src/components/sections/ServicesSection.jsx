import React from "react";
// import { FaChalkboardTeacher, FaPaintBrush, FaMicrochip } from "@react-icons/fa";

function ServicesSection() {
  return (
    <section className="py-16 bg-white relative w-full">
      <div className="px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          Our Services
        </h2>
        <div className=" flex w-full gap-8 justify-center items-start flex-col md:flex-row">
          {/* Left Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 flex items-start space-x-4">
              {/* <FaChalkboardTeacher className="text-3xl text-gray-700" /> */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Consulting
                </h3>
                <p className="text-gray-600">Design Thinking</p>
                <p className="text-gray-500 text-sm">
                  UXD ( Enhance UI/UX Experience )
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex items-start space-x-4">
              {/* <FaPaintBrush className="text-3xl text-gray-700" /> */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Reet Studio
                </h3>
                <p className="text-gray-600">AR/VR/MR</p>
                <p className="text-gray-500 text-sm">
                  UXD ( Enhance UI/UX Experience )
                </p>
              </div>
            </div>
          </div>

          {/* Right Gradient Box */}
          <div className="bg-gradient-to-tr from-indigo-500 via-indigo-400 to-blue-300 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6 space-x-3">
              {/* <FaMicrochip className="text-3xl" /> */}
              <h3 className="text-2xl font-bold">Technology</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <h4 className="font-semibold mb-2">Enterprise Solution</h4>
                <ul className="space-y-1 text-sm">
                  <li>Salesforce Development</li>
                  <li>E-commerce Development</li>
                  <li>Web App Development</li>
                  <li>Mobile App Development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Future Ready Tech</h4>
                <ul className="space-y-1 text-sm">
                  <li>Artificial Intelligence</li>
                  <li>Blockchain Development</li>
                  <li>Cloud Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
