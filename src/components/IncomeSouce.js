"use client";

import { useEffect, useState } from "react";

const IncomeSouce = ({ personalInfoId }) => {
  const [incomeSources, setIncomeSources] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncomeSources = async () => {
      try {
        const response = await fetch(`/api/incomeSources?personalInfoId=${personalInfoId}`);
        if (!response.ok) {
          throw new Error(`Error fetching income sources: ${response.statusText}`);
        }
        const data = await response.json();
        setIncomeSources(data);
      } catch (error) {
        console.error("Error fetching income sources:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncomeSources();
  }, [personalInfoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const displayIncomeSources = Object.keys(incomeSources)
    .filter((key) => incomeSources[key])
    .map((key) => (
      <h2
        key={key}
        className="border-b-[1px] border-[#ffffff74] px-4 py-2 text-[10px] text-[#ffffff91]"
      >
        {key.replace("Check", "").replace(/([A-Z])/g, " $1").trim().toUpperCase()}
      </h2>
    ));

  return (
    <div>
      <div>
        <div className="border-b-[1px] border-[#ffffff74] px-4 py-2">
          <h2 className="text-[10px] text-[#ffffff91]">INCOME TAX</h2>
        </div>
        <div className="flex justify-between border-b-[1px] border-[#ffffff74] px-4 py-3">
          <div>
            <h2 className="text-[14px] text-white">INCOME SOURCE</h2>
          </div>
          <div>
            <p className="text-[14px] text-white">500</p>
          </div>
        </div>
        <div>
          {displayIncomeSources.length > 0 ? (
            displayIncomeSources
          ) : (
            <h2 className="border-b-[1px] border-[#ffffff74] px-4 py-2 text-[10px] text-[#ffffff91]">
              No Income Sources Selected
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomeSouce;
