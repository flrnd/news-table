import React, { useState } from "react";
import { getAllStored } from "../store";
import { getItemTime, getDateWithNames } from "../util/date";
import Button from "react-bootstrap/Button";
const TODAY = Date.now();
function HistoryPage() {
  const [history, setHistory] = useState({ data: [] });

  const fetchHistory = () => {
    getAllStored().then((item) => {
      setHistory({ data: item });
    });
  };

  return (
    <>
      <Button onClick={fetchHistory}>fetch</Button>
      <div style={{ paddingTop: "25px" }}>
        <h2>Today - {getDateWithNames(TODAY)}</h2>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <ul>
          {history.data.map((h, i) => (
            <li key={h.key} id={h.key}>
              {getItemTime(h.key)} {h.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryPage;
