import React from "react";
import { LogOut } from "lucide-react";
import { logout } from "../apiCalls/authCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/userSlice";

export default function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await logout();
      alert('Logged out successfully!');
      dispatch(userLogout());
      navigate("/login")
    } catch (error) {
      alert('Error logging out');
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to Dashboard!
          </h2>
          <p className="text-gray-700">
            This is your dashboard. Click the logout button to test the logout functionality.
          </p>
        </div>
      </main>
    </div>
  );
}