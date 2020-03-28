import React from "react";
import Table from "react-bootstrap/Table";
import { saveItem } from "../store";
import "./Table.css";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const columns = 3;
const firstRow = alphabet.split("").slice(0, columns + 1);
const header = ["", "Date", "Heading", "Link"];

const onClickHandler = (event) => {
  const url = event.target.innerText;
  saveItem(Date.now(), url);
};

const row = (content) =>
  content.map((cell, index) => (
    <td key={index} id={`${index}#${cell}`}>
      {cell}
    </td>
  ));

const tableBody = (header, body) => (
  <tbody>
    <tr>{row(header)}</tr>
    {body.map((article, index) => (
      <tr key={index} id={`${index}#${article.publishedAt}`}>
        <td>{index + 1}</td>
        <td>{article.publishedAt.split("T")[0]}</td>
        <td>{article.title}</td>
        <td onClick={onClickHandler}>{article.url}</td>
      </tr>
    ))}
  </tbody>
);

function NewsTable({ body }) {
  return (
    <Table hover>
      <thead>
        <tr>
          {firstRow.map((cell, index) => (
            <th key={index} id={`${index}#${cell}`}>
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      {tableBody(header, body)}
    </Table>
  );
}

export default NewsTable;
