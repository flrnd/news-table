import React from "react";
import Table from "react-bootstrap/Table";
import "./Table.css";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const row = (content) =>
  content.map((cell, index) => (
    <td key={index} id={`${index}#${cell}`}>
      {cell}
    </td>
  ));

const tableHeader = (size) => {
  const firstRow = alphabet.split("").slice(0, size + 1);
  const header = firstRow.map((cell, index) => (
    <th key={index} id={`${index}#${cell}`}>
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
        <td>{index + 1}</td>
        <td>{article.publishedAt.split("T")[0]}</td>
        <td>{article.title}</td>
        <td>
          <a href={article.url}>{article.source}</a>
        </td>
      </tr>
    ))}
  </tbody>
);

function NewsTable({ header, body, columnSize }) {
  return (
    <Table responsive="sm" hover>
      {tableHeader(columnSize)}
      {tableBody(header, body)}
    </Table>
  );
}

export default NewsTable;
