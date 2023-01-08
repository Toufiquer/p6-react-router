import React from "react";
import { clearAllDB } from "../utilities/manageDB";
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
      <div className="flex">
        <button onClick={clearAllDB} className="text-sm text-white w-1/2 bg-red-500 py-2 px-6 hover:bg-red-600 rounded cursor-pointer my-2 mx-auto">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Summary;