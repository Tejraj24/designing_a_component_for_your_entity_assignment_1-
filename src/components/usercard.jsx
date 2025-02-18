// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Tejraj Singh";
  const email = "tejraj@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white border border-gray-200">
      <img className="w-24 h-24 rounded-full mx-auto" src={profilePhoto} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
