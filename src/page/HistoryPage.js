import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import { getAllStored } from "../store";
import { getItemTime, getDateWithNames } from "../util/date";

import "react-datepicker/dist/react-datepicker.css";
import "./HistoryPage.css";

const TODAY = Date.now();

function HistoryPage() {
  const [history, setHistory] = useState({ data: [] });
  const [startDate, setStartDate] = useState(TODAY);

  const fetchHistory = (start) => {
    getAllStored(startDate).then((stored) => {
      setHistory({ data: stored });
    });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date.getTime());
  };

  useEffect(() => {
    if (startDate) fetchHistory(startDate);
    // eslint-disable-next-line
  }, [startDate]);
  return (
    <>
      <Row>
        <Col sm={4}>
          <div className="label">Pick a date</div>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="date-picker-list">
            <h4>Showing history starting at: {getDateWithNames(startDate)}</h4>
            <Table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {history.data.map((h, i) => (
                  <tr key={h.key} id={h.key}>
                    <td>{getItemTime(h.key)}</td>
                    <td>{h.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HistoryPage;
