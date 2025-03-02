import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext); 
  console.log("Logged in user from context:", user); // Debugging

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        {user ? (
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Welcome, {user.full_name}!
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Welcome, Guest!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
