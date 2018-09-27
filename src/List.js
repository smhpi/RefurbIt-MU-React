import React, { Component } from "react";

import "./styles/styles.css";

const List = props => {
  const { productName } = props;
  return (
    <table style={{ textAlign: "left" }} className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th>SKU</th>
          <th>Title</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {productName.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
