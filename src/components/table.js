import React from "react";
import Cell from "./cell";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const row = (content) =>
  content.map((cell, index) => <Cell key={index}>{cell}</Cell>);

export const tableHeader = (size) => {
  const firstRow = alphabet.split("").slice(0, size + 1);
  const header = firstRow.map((cell, index) => <th key={index}>{cell}</th>);

  return (
    <thead>
      <tr>{header}</tr>
    </thead>
  );
};

export const tableBody = (header, body) => (
  <tbody>
    <tr>{row(header)}</tr>
    {body.map((article, index) => (
      <tr key={index}>
        <Cell>{index + 1}</Cell>
        <Cell>{article.publishedAt}</Cell>
        <Cell>{article.title}</Cell>
        <Cell>{article.url}</Cell>
      </tr>
    ))}
  </tbody>
);

export const Table = ({ header, body, columnSize }) => {
  return (
    <table>
      {tableHeader(columnSize)}
      {tableBody(header, body)}
    </table>
  );
};
