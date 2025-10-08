import React, { useEffect, useState } from "react";
import App1 from "../App1/App1";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("./appsData1.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  return (
    <div className="grid grid-cols-4">
      {apps.slice(0, 8).map((app) => (
        <App1 app={app}></App1>
      ))}
    </div>
  );
};

export default TrendingApps;
