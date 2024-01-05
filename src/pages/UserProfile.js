import React from "react";

const UserProfile = ({ user }) => {
  // Assuming user is an object with properties: name, email, and phoneNumber
  const { name, email, phoneNumber } = user;

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="mb-4">
            <label className="text-gray-600">Name:</label>
            <p className="text-black">{name}</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-600">Email:</label>
            <p className="text-black">{email}</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-600">Phone Number:</label>
            <p className="text-black">{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
