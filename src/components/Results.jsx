import React, { useEffect, useState } from "react";
import axios from "axios";

const Results = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get("http://localhost:5000/results");
      setResults(response.data);
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {Object.keys(results).map((candidate) => (
          <li key={candidate}>
            {candidate}: {results[candidate]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
