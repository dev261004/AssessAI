import React from "react";
import Sidebar from "../components/Sidebar";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const PreviousTestsPage = () => {
  const navigate = useNavigate();

  // Example data for previous tests
  const previousTests = [
    { id: 1, name: "Math Test 1", date: "2025-03-15", averageScore: 85 },
    { id: 2, name: "Science Test 1", date: "2025-03-20", averageScore: 78 },
    { id: 3, name: "History Test 1", date: "2025-03-25", averageScore: 92 },
    { id: 4, name: "English Test 1", date: "2025-03-30", averageScore: 88 },
  ];

  const handleTestClick = (testId) => {
    // Redirect to the results page (you can pass testId as a query parameter if needed)
    navigate("/results");
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-15">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center bg-blue-500 text-white py-4 rounded-lg">
            <Typography variant="h4" className="font-bold">
              Previous Tests
            </Typography>
            <Typography className="text-gray-200">
              View all the tests you have conducted
            </Typography>
          </div>

          {/* List of Previous Tests */}
          <div className="space-y-4">
            {previousTests.map((test) => (
              <Card
                key={test.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleTestClick(test.id)}
              >
                <CardBody className="flex justify-between items-center">
                  <div>
                    <Typography variant="h5" className="font-semibold text-gray-800">
                      {test.name}
                    </Typography>
                    <Typography className="text-gray-600">
                      Date: {test.date}
                    </Typography>
                  </div>
                  <Typography className="text-blue-600 font-bold">
                    Avg. Score: {test.averageScore}%
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousTestsPage;