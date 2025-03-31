import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UserHomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Example user data
  const username = "John Doe";
  const stats = {
    totalTests: 25,
    totalAssignments: 120,
    totalTimeSaved: 48, // in hours
  };

  // Dummy data for previous tests
  const previousTests = [
    { id: 1, name: "Math Test 1", date: "2025-03-15", averageScore: 85 },
    { id: 2, name: "Science Test 1", date: "2025-03-20", averageScore: 78 },
    { id: 3, name: "History Test 1", date: "2025-03-25", averageScore: 92 },
  ];

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } overflow-hidden`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-10">
        {/* Centered Greeting Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-600">
            Welcome back, {username}!
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            Here’s a quick overview of your activity:
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Total Tests Taken */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <CircularProgressbar
              value={stats.totalTests}
              maxValue={50}
              text={`${stats.totalTests}`}
              styles={buildStyles({
                textColor: "#4A90E2",
                pathColor: "#4A90E2",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-4 text-lg font-semibold">Total Tests Taken</p>
          </div>

          {/* Total Assignments Evaluated */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <CircularProgressbar
              value={stats.totalAssignments}
              maxValue={200}
              text={`${stats.totalAssignments}`}
              styles={buildStyles({
                textColor: "#50C878",
                pathColor: "#50C878",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-4 text-lg font-semibold">Assignments Evaluated</p>
          </div>

          {/* Total Time Saved */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <CircularProgressbar
              value={stats.totalTimeSaved}
              maxValue={100}
              text={`${stats.totalTimeSaved}h`}
              styles={buildStyles({
                textColor: "#FF6347",
                pathColor: "#FF6347",
                trailColor: "#d6d6d6",
              })}
            />
            <p className="mt-4 text-lg font-semibold">Time Saved</p>
          </div>
        </div>

        {/* Create a New Test Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Create a New Test</h2>
          <p className="text-lg mb-6">
            Start a new test by selecting a template and uploading student
            answer sheets.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Create Test
          </button>
        </div>

        {/* View Previous Tests Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            View Previous Tests
          </h2>
          <div className="space-y-4">
            {previousTests.map((test) => (
              <div
                key={test.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {test.name}
                  </h3>
                  <p className="text-gray-600">Date: {test.date}</p>
                </div>
                <p className="text-lg font-bold text-blue-600">
                  Avg. Score: {test.averageScore}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;