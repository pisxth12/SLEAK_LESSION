import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-black">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Welcome Back
        </h1>

        <form className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="leakhobii@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/80"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Password
            </label>
            <input
              type="password" placeholder="*****"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/80"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-black/70 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-black/80 mt-6">
          Don’t have an account?{" "}
          <span className="text-black cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
