"use client";

import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  UserGroupIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection() {
  return (
    <section className="bg-[#f0f0f0] text-gray-800 py-20 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Images */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10">
          <Image
            src="/test.jpg"
            alt="Business Woman"
            width={500}
            height={400}
            className=" shadow-lg"
          />

          {/* Video Play Button */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-bold relative cursor-pointer">
              <PlayCircleIcon className="w-10 h-10" />
              <span className="absolute text-xs w-full text-center mt-20 font-medium">
                PLAY INTRO VIDEO
              </span>
            </div>
          </div> */}
        </div>

        <Image
          src="/test.jpg"
          alt="Support Agent"
          width={250}
          height={200}
          className="hidden lg:block mt-[-150px] ml-100 shadow-xl relative z-20"
        />

        {/* Badge */}
        <div className="absolute top-10 left-[-20px] z-10 bg-white shadow-md px-4 py-2 rounded-md flex items-center gap-2">
          <UserGroupIcon className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-lg">6,561+</span>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <p className="text-blue-600 uppercase text-lg font-semibold mb-2 tracking-wider">
          About Reet Technologies
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold leading-snug mb-6">
          Fueling Business Growth Through Innovative{" "}
          <span className="text-blue-600"> Technological Solutions</span>
        </h2>
        <p className="text-gray-600 mb-8 font-bold">
          Future-ready strategies – Indicates a focus on innovation and
          scalability—solutions designed not just for today, but to adapt and
          succeed in a fast-changing tech landscape.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <PuzzlePieceIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Digital Transformation</h4>
              <p className="text-gray-500 text-sm">
                Aliquam erat volutpat Nullam imperdiet
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <ChartBarIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Next Gen Consulting</h4>
              <p className="text-gray-500 text-sm">
                Aliquam erat volutpat Nullam imperdiet
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t pt-6">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition"
          >
            Explore More →
          </a>

          <div className="flex items-center gap-3">
            <Image
              src="/test.jpg"
              alt="Ronald Richards"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Pankaj Deole</p>
              <p className="text-sm text-gray-500">CEO, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
