import React, { useState } from "react";
import axios from "axios";

const Voting = () => {
  const [candidate, setCandidate] = useState("");
  const [message, setMessage] = useState("");

  const handleVote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/vote", {
        candidate,
      });
      setMessage(response.data.message || response.data.error);
    } catch (error) {
      setMessage("Error casting vote");
    }
  };

  return (
    <div>
      <h2>Vote</h2>
      <form onSubmit={handleVote}>
        <input
          type="text"
          value={candidate}
          onChange={(e) => setCandidate(e.target.value)}
          placeholder="Enter Candidate"
          required
        />
        <button type="submit">Vote</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Voting;
