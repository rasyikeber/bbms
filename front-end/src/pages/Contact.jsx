import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center mt-40 text-3xl font-bold text-cyan-800">
        Contact
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => navigate("/contact/info")}
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700"
        >
          Contact Info
        </button>
        <button
          onClick={() => navigate("/contact/form")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Contact Form
        </button>
      </div>
    </>
  );
};

export default Contact;
