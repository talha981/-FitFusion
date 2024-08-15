// PaymentAndBilling.js
import React, { useState } from 'react';

const Payment = () => {
  const [billingDetails, setBillingDetails] = useState({
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-08-01', amount: '$50.00', description: 'Monthly Membership' },
    { id: 2, date: '2024-07-01', amount: '$50.00', description: 'Monthly Membership' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };
  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment details:', billingDetails);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Payment & Billing</h1>

      {/* Billing Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Billing Information</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Payment Method</label>
            <input
              type="text"
              name="paymentMethod"
              value={billingDetails.paymentMethod}
              onChange={handleChange}
              placeholder="e.g., Credit Card"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={billingDetails.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9123 4567"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={billingDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              name="cvv"
              value={billingDetails.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Payment Method
          </button>
        </form>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Transaction History</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Date</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Amount</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border-b border-gray-300 p-4">{transaction.date}</td>
                <td className="border-b border-gray-300 p-4">{transaction.amount}</td>
                <td className="border-b border-gray-300 p-4">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Membership Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Manage Membership</h2>
        <div className="flex space-x-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Upgrade Membership
          </button>
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Downgrade Membership
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Renew Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
