import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ResultsPage = () => {
  const [expandedStudent, setExpandedStudent] = useState(null);

  // Example data
  const stats = {
    averageMarks: 75,
    maxMarks: 95,
    minMarks: 50,
  };

  const studentMarks = [
    {
      name: "Student 1",
      marks: 85,
      questionMarks: [10, 15, 20, 20, 20],
    },
    {
      name: "Student 2",
      marks: 78,
      questionMarks: [12, 14, 18, 18, 16],
    },
    {
      name: "Student 3",
      marks: 92,
      questionMarks: [18, 20, 20, 20, 14],
    },
    {
      name: "Student 4",
      marks: 65,
      questionMarks: [10, 12, 15, 15, 13],
    },
    {
      name: "Student 5",
      marks: 50,
      questionMarks: [8, 10, 12, 10, 10],
    },
    {
      name: "Student 6",
      marks: 95,
      questionMarks: [20, 20, 20, 20, 15],
    },
    {
      name: "Student 7",
      marks: 70,
      questionMarks: [10, 15, 15, 15, 15],
    },
  ];

  // Calculate mean, median, and mode
  const marks = studentMarks.map((student) => student.marks);
  const mean = (marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2);

  const median = (() => {
    const sorted = [...marks].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2);
  })();

  const mode = (() => {
    const frequency = {};
    marks.forEach((mark) => (frequency[mark] = (frequency[mark] || 0) + 1));
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(
      (key) => frequency[key] === maxFreq
    );
    return modes.join(", ");
  })();

  // Chart data
  const chartData = {
    labels: studentMarks.map((student) => student.name),
    datasets: [
      {
        label: "Marks",
        data: marks,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Marks Distribution",
      },
    },
  };

  const toggleStudentDetails = (index) => {
    setExpandedStudent(expandedStudent === index ? null : index);
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
          {/* Green Header */}
          <div className="text-center bg-green-500 text-white py-4 rounded-lg">
            <Typography variant="h4" className="font-bold">
              Here are the Results!
            </Typography>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardBody className="text-center">
                <Typography variant="h5" className="font-bold text-gray-800">
                  Average Marks
                </Typography>
                <Typography variant="h4" className="text-blue-600 font-extrabold">
                  {stats.averageMarks}
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg">
              <CardBody className="text-center">
                <Typography variant="h5" className="font-bold text-gray-800">
                  Maximum Marks
                </Typography>
                <Typography variant="h4" className="text-green-600 font-extrabold">
                  {stats.maxMarks}
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg">
              <CardBody className="text-center">
                <Typography variant="h5" className="font-bold text-gray-800">
                  Minimum Marks
                </Typography>
                <Typography variant="h4" className="text-red-600 font-extrabold">
                  {stats.minMarks}
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Individual Marks List */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Typography variant="h5" className="font-bold text-gray-800 mb-4">
              Individual Marks
            </Typography>
            <ul className="space-y-2">
              {studentMarks.map((student, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer"
                  onClick={() => toggleStudentDetails(index)}
                >
                  <div className="flex justify-between items-center">
                    <Typography className="text-gray-800 font-medium">
                      {student.name}
                    </Typography>
                    <Typography className="text-blue-600 font-bold">
                      {student.marks}
                    </Typography>
                  </div>
                  {expandedStudent === index && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <Typography className="font-bold text-gray-700 mb-2">
                        Marks by Question:
                      </Typography>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {student.questionMarks.map((mark, qIndex) => (
                          <div
                            key={qIndex}
                            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
                          >
                            <Typography className="text-gray-800 font-medium">
                              Question {qIndex + 1}
                            </Typography>
                            <div className="w-2/3 bg-gray-200 rounded-full h-4">
                              <div
                                className="bg-blue-500 h-4 rounded-full"
                                style={{ width: `${(mark / 20) * 100}%` }}
                              ></div>
                            </div>
                            <Typography className="text-blue-600 font-bold ml-2">
                              {mark}/20
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Statistical Graph */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Typography variant="h5" className="font-bold text-gray-800 mb-4">
              Statistical Graph
            </Typography>
            <Bar data={chartData} options={chartOptions} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <Typography variant="h6" className="font-bold text-gray-800">
                  Mean
                </Typography>
                <Typography className="text-blue-600 font-extrabold">{mean}</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h6" className="font-bold text-gray-800">
                  Median
                </Typography>
                <Typography className="text-green-600 font-extrabold">{median}</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h6" className="font-bold text-gray-800">
                  Mode
                </Typography>
                <Typography className="text-red-600 font-extrabold">{mode}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;