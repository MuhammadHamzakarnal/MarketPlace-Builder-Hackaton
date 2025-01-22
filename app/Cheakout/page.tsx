import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-between">
      {/* Left Section */}
      <div className="w-full md:w-2/3 bg-white p-6 md:p-12 shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold mb-6">How would you like to get your order?</h1>
        <p className="text-sm text-gray-600 mb-4">
          Customs regulation for India requires a copy of the recipient’s KYC. The address on this KYC needs to match the shipping address.
          Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the
          purpose of clearing customs (including sharing it with customs officials) for all orders and returns.
          <a href="#" className="text-blue-500 underline ml-1">Learn More</a>
        </p>
        <button className="border border-gray-300 rounded-md py-2 px-4 mb-8 hover:bg-gray-100">
          Deliver it
        </button>

        <h2 className="text-lg font-semibold mb-4">Enter your name and address:</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="First Name" className="border border-gray-300 rounded-md py-2 px-4" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md py-2 px-4" />
          <input
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 rounded-md py-2 px-4 md:col-span-2"
          />
          <input type="text" placeholder="Address Line 2" className="border border-gray-300 rounded-md py-2 px-4" />
          <input type="text" placeholder="Address Line 3" className="border border-gray-300 rounded-md py-2 px-4" />
          <input type="text" placeholder="Postal Code" className="border border-gray-300 rounded-md py-2 px-4" />
          <input type="text" placeholder="Locality" className="border border-gray-300 rounded-md py-2 px-4" />
          <select className="border border-gray-300 rounded-md py-2 px-4">
            <option>State/Territory</option>
          </select>
          <input type="text" placeholder="India" className="border border-gray-300 rounded-md py-2 px-4" />
        </form>
        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="save-address" className="h-4 w-4" />
          <label htmlFor="save-address" className="text-sm text-gray-600">
            Save this address to my profile
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="preferred-address" className="h-4 w-4" />
          <label htmlFor="preferred-address" className="text-sm text-gray-600">
            Make this my preferred address
          </label>
        </div>

        <h2 className="text-lg font-semibold mb-4">What's your contact information?</h2>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">A confirmation email will be sent after checkout.</p>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-md py-2 px-4 w-full mb-6"
        />
        <p className="text-sm text-gray-500 mb-6">A carrier might contact you to confirm delivery.</p>

        <h2 className="text-lg font-semibold mb-4">What's your PAN?</h2>
        <input
          type="text"
          placeholder="PAN"
          className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">Enter your PAN to enable payment with UPI, Net Banking or local card methods.</p>
        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="save-pan" className="h-4 w-4" />
          <label htmlFor="save-pan" className="text-sm text-gray-600">
            Save PAN details to Nike Profile
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="consent" className="h-4 w-4" />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I have read and consent to the processing of my information in accordance with the
            <a href="#" className="text-blue-500 underline"> Privacy Statement</a> and
            <a href="#" className="text-blue-500 underline"> Cookies Policy</a>.
          </label>
        </div>
        <button className="bg-gray-200 text-gray-600 py-3 px-6 rounded-md w-full mb-8">
          Continue
        </button>

        <h2 className="text-lg font-semibold mb-4">Delivery</h2>
        <div className="border-b border-gray-300 mb-4"></div>
        <h2 className="text-lg font-semibold mb-4">Shipping</h2>
        <div className="border-b border-gray-300 mb-4"></div>
        <h2 className="text-lg font-semibold mb-4">Billing</h2>
        <div className="border-b border-gray-300 mb-4"></div>
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="border-b border-gray-300 mb-4"></div>
      </div>
       {/* Right Section */}
       <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 mt-6 md:mt-0">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">₹ 20,890.00</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">Delivery/Shipping</p>
          <p className="font-semibold">Free</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold">₹ 20,890.00</p>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          (The total reflects the price of your order, including all duties and taxes)
        </p>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-md font-semibold mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="h-20 w-20 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-700 font-semibold">Nike Dri-FIT ADV TechKnit</p>
              <p className="text-sm text-gray-500">Ultra Men's Short-Sleeve Running Top</p>
              <p className="text-sm font-bold">₹ 3,895.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="h-20 w-20 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-700 font-semibold">Nike Air Max 97 SE Men's Shoes</p>
              <p className="text-sm text-gray-500">Size UK 8</p>
              <p className="text-sm font-bold">₹ 16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;