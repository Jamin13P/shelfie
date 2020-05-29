import React from "react";
import Product from "../Product/Product";

function Dashboard(props) {
  const inventoryMap = props.inventory.map((elem) => (
    <Product key={elem.id} data={elem} />
  ));
  return <div>{inventoryMap}</div>;
}

export default Dashboard;
