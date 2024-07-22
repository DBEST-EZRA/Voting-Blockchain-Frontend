import React, { useEffect, useState } from "react";
import axios from "axios";

const AuditLog = () => {
  const [auditLog, setAuditLog] = useState([]);

  useEffect(() => {
    const fetchAuditLog = async () => {
      const response = await axios.get("http://localhost:5000/audit-log");
      setAuditLog(response.data);
    };
    fetchAuditLog();
  }, []);

  return (
    <div>
      <h2>Audit Log</h2>
      <ul>
        {auditLog.map((log, index) => (
          <li key={index}>
            {log.timestamp} - Voter: {log.voterId} voted for {log.candidate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLog;
