"use client";

import Sidebar from "@/components/sidebar";
import Image from "next/image";
import card from "@/assets/card.png";
import { useState } from "react";

export default function TaxPage() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    dob: "",
    cnic: "",
    occupation: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, dob, cnic, occupation, email, mobile } = personalInfo;
    try {
      const response = await fetch("/api/personal-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, dob, cnic, occupation, email, mobile }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }

    setPersonalInfo({
      fullName: "",
      dob: "",
      cnic: "",
      occupation: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <div className="my-16">
            <Image src={card} width={50} height={50} className="mx-auto" />
            <h2 className="text-center text-[22px]">
              Welcome, this is your last filled{" "}
              <span className="font-bold">Personal Information</span>
            </h2>
            <p className="text-center text-[14px]">
              you can update your information for this year
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-4 flex max-w-4xl items-center justify-center">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                onChange={handleChange}
                value={personalInfo.fullName}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Your date of birth"
                onChange={handleChange}
                value={personalInfo.dob}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="text"
                id="cnic"
                name="cnic"
                placeholder="CNIC No"
                value={personalInfo.cnic}
                onChange={handleChange}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className="mx-auto flex max-w-4xl items-center justify-center">
              <select
                id="occupation"
                name="occupation"
                value={personalInfo.occupation}
                onChange={handleChange}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              >
                <option value="">Select Occupation</option>
                <option value="Corporate Sector">Corporate Sector</option>
                <option value="Federal Govt.">Federal Govt.</option>
                <option value="Provincial Govt">Provincial Govt</option>
                <option value="Research / Teacher">Research / Teacher</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={personalInfo.email}
                onChange={handleChange}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                value={personalInfo.mobile}
                onChange={handleChange}
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className="mx-auto mt-4 flex max-w-4xl items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 bg-[#1d2144] py-2 px-4 text-[14px] text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
