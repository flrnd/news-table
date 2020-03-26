import React from "react";
import Cell from "./Cell";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const row = (content) =>
  content.map((cell, index) => (
    <Cell key={index} id={index}>
      {cell}
    </Cell>
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
        <Cell>{index + 1}</Cell>
        <Cell>{article.publishedAt}</Cell>
        <Cell>{article.title}</Cell>
        <Cell>{article.url}</Cell>
      </tr>
    ))}
  </tbody>
);

function Table({ header, body, columnSize }) {
  return (
    <table>
      {tableHeader(columnSize)}
      {tableBody(header, body)}
    </table>
  );
}

export default Table;
