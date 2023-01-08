import React from "react";
import { calculateGrandTotal, calculateTax, calculateTotalAmount, calculateTotalProduct } from "../utilities/productManage";

const Summary = ({ cartDetailsProducts }) => {
  let totalItem = calculateTotalProduct(cartDetailsProducts);
  let totalAmount = calculateTotalAmount(cartDetailsProducts);
  let tax = calculateTax(cartDetailsProducts);
  let grandTotal = calculateGrandTotal(cartDetailsProducts);
  return (
    <div className="text-left p-4">
      <h2>Total Item: ${totalItem}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
      <h2>Tax: ${tax}</h2>
      <h2>Grand Total: ${grandTotal}</h2>
    </div>
  );
};

export default Summary;
