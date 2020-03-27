import React from "react";
import "./Table.css";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const row = (content) =>
  content.map((cell, index) => (
    <td key={index} id={index}>
      {cell}
    </td>
  ));

const tableHeader = (size) => {
  const firstRow = alphabet.split("").slice(0, size + 1);
  const header = firstRow.map((cell, index) => (
    <th key={index} id={index}>
      {cell}
    </th>
  ));

  return (
    <thead>
      <tr>{header}</tr>
    </thead>
  );
};

const tableBody = (header, body) => (
  <tbody>
    <tr>{row(header)}</tr>
    {body.map((article, index) => (
      <tr key={index} id={`${index}#${article.publishedAt}`}>
        <td style={{ width: "10px" }}>{index + 1}</td>
        <td style={{ width: "100px" }}>{article.publishedAt.split("T")[0]}</td>
        <td style={{ width: "400px" }}>{article.title}</td>
        <td style={{ width: "200px" }}>
          <a href={article.url}>{article.source}</a>
        </td>
      </tr>
    ))}
  </tbody>
);

function Table({ header, body, columnSize }) {
  return (
    <table>
      <colgroup>
        <col span="2" />
        <col style={{ whiteSpace: "nowrap" }} />
      </colgroup>
      {tableHeader(columnSize)}
      {tableBody(header, body)}
    </table>
  );
}

export default Table;
