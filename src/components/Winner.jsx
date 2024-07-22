import React, { useEffect, useState } from "react";
import axios from "axios";

const Winner = () => {
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const fetchWinner = async () => {
      const response = await axios.get("http://localhost:5000/winner");
      setWinner(response.data.winner);
    };
    fetchWinner();
  }, []);

  return (
    <div>
      <h2>Winner</h2>
      <p>{winner}</p>
    </div>
  );
};

export default Winner;
