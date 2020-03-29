import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { getAllStored } from "../store";
import { getItemTime, getDateWithNames } from "../util/date";

import "react-datepicker/dist/react-datepicker.css";
import "./HistoryPage.css";

const TODAY = Date.now();

function HistoryPage() {
  const [history, setHistory] = useState({ data: [] });
  const [startDate, setStartDate] = useState(TODAY);
  const [endDate, setEndDate] = useState(TODAY);

  const fetchHistory = (start, end) => {
    getAllStored(start, end).then((stored) => {
      setHistory({ data: stored });
    });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date.getTime());
  };

  const handleEndDateChange = (date) => {
    setEndDate(date.getTime());
  };

  useEffect(() => {
    if (startDate && endDate) fetchHistory(startDate, endDate);
  }, [startDate, endDate]);
  return (
    <>
      <Row>
        <Col sm={4}>
          <div className="label">Star date</div>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
        </Col>
        <Col sm={4}>
          <div className="label">End date</div>
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="date-picker-list">
            <h2>{getDateWithNames(startDate)}</h2>
            <ListGroup>
              {history.data.map((h, i) => (
                <ListGroup horizontal="sm">
                  <ListGroup.Item key={h.key} id={h.key}>
                    {getItemTime(h.key)}
                  </ListGroup.Item>
                  <ListGroup.Item>{h.value}</ListGroup.Item>
                </ListGroup>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HistoryPage;
