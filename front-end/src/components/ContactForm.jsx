import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-cyan-800 text-center mb-4">Contact Form</h2>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
          <input
            type="number"
            id="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
