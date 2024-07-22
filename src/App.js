import React from "react";
import Voting from "./components/Voting";
import Results from "./components/Results";
import Winner from "./components/Winner";
import AuditLog from "./components/AuditLog";

const App = () => {
  return (
    <div>
      <h1>Voting Blockchain System</h1>
      <Voting />
      <Results />
      <Winner />
      <AuditLog />
    </div>
  );
};

export default App;
