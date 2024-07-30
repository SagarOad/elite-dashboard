"use client";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function IncomeForm() {
  const personalInfoId = "clz1azhvw0000bk8mtuyfgp3s"; // Replace with an actual ID

  const [options, setOptions] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/api/income-options");
        const { data } = await response.json();
        setOptions(data);
        setFormData(
          data.reduce((acc, option) => {
            acc[option.key] = false;
            return acc;
          }, {})
        );
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/income", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, personalInfoId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.error}`);
      }

      const data = await response.json();
      console.log("Income data submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting income data:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Header />
        <div className="p-8">
          <div className="my-16">
            {/* <Image src={card} width={50} height={50} className="mx-auto" /> */}
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-center text-xl font-semibold mb-4">
              Now let's start Looking at your Income
            </h2>
            <p className="text-center mb-8">
              Select the sources of your income, you can select more than one if
              applicable
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {options.map((option) => (
                <div key={option.key} className="flex flex-col items-center">
                  <label className="flex flex-col items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={option.key}
                      checked={formData[option.key]}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center">
                      {/* Replace with appropriate icons */}
                      <div
                        className={`h-16 w-16 mb-2 rounded-full flex items-center justify-center ${
                          formData[option.key] ? "bg-green-500" : "bg-gray-200"
                        }`}
                      >
                        {formData[option.key] ? (
                          <span className="text-2xl text-white">✔️</span>
                        ) : (
                          <span className="text-2xl">📦</span>
                        )}
                      </div>
                      <span className="text-center">{option.name}</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
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
