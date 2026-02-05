import React from "react";

const UserCard = ({ user }) => {


  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm hover:shadow-lg transition">
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-lg font-bold">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Info */}
      <div className="text-sm text-gray-700 space-y-1">
        <p>📧 {user.email}</p>
        <p>📞 {user.phone}</p>
        <p>📍 {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
