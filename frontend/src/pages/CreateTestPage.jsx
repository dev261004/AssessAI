import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";

const CreateTestPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [numStudents, setNumStudents] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const templates = [
    { id: 1, name: "Math Test Template" },
    { id: 2, name: "Science Test Template" },
    { id: 3, name: "History Test Template" },
    { id: 4, name: "English Test Template" },
    { id: 5, name: "Physics Test Template" },
    { id: 6, name: "Chemistry Test Template" },
    { id: 7, name: "Biology Test Template" },
    { id: 8, name: "Geography Test Template" },
    { id: 9, name: "Computer Science Test Template" },
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsDialogOpen(true);
  };

  const handleCreateTest = () => {
    if (uploadedFiles.length !== parseInt(numStudents, 10)) {
      alert(`Please upload exactly ${numStudents} files.`);
      return;
    }

    setIsDialogOpen(false);
    setIsLoading(true);

    // Simulate test evaluation process
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/results"; // Redirect to results page
    }, 3000);
  };

  const onDrop = (acceptedFiles) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf,.docx,.txt", // Accept specific file types
    multiple: true, // Allow multiple files
  });

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
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-6">
          <Typography variant="h3" className="text-center text-blue-600 font-bold">
            Create a New Test
          </Typography>
          <Typography className="text-center text-gray-600">
            Select a prebuilt template to get started.
          </Typography>

          {/* Templates List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleTemplateSelect(template)}
              >
                <CardBody className="text-center">
                  <Typography variant="h5" className="font-semibold text-gray-800">
                    {template.name}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Dialog for Number of Students and File Upload */}
          <Dialog
            open={isDialogOpen}
            handler={() => setIsDialogOpen(false)}
            className="z-50 bg-opacity-50"
          >
            <DialogHeader>
              <Typography variant="h5" className="font-bold">
                {selectedTemplate?.name}
              </Typography>
            </DialogHeader>
            <DialogBody>
              <div className="space-y-4">
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Number of Students
                  </Typography>
                  <Input
                    type="number"
                    value={numStudents}
                    onChange={(e) => setNumStudents(e.target.value)}
                    placeholder="Enter number of students"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Upload Answer Key Files
                  </Typography>
                  <div
                    {...getRootProps()}
                    className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-lg"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500">
                      Drag & drop files here, or click to select files
                    </p>
                  </div>
                  <div className="mt-2">
                    {uploadedFiles.length > 0 && (
                      <ul className="list-disc list-inside text-gray-700">
                        {uploadedFiles.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => setIsDialogOpen(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button
                color="blue"
                onClick={handleCreateTest}
                disabled={!numStudents || uploadedFiles.length === 0}
              >
                Create Test
              </Button>
            </DialogFooter>
          </Dialog>

          {/* Loading Screen */}
          {isLoading && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <Typography className="mt-4 text-white">
                  Evaluating tests, please wait...
                </Typography>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTestPage;