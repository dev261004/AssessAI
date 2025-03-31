import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    companyName: "AssessAI Inc.",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
    subjects: "Mathematics, Science",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile details saved successfully!");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log("Account deleted");
      // Add account deletion logic here
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-15">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardBody>
              {/* Header */}
              <div className="text-center mb-8">
                <Typography variant="h4" className="font-bold text-gray-800">
                  Profile
                </Typography>
                <Typography className="text-gray-600">
                  Manage your profile details below
                </Typography>
              </div>

              {/* Profile Fields */}
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Full Name
                  </Typography>
                  <Input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`mt-2 border-2 bg-blue-300 ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    }`}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Company Name
                  </Typography>
                  <Input
                    type="text"
                    name="companyName"
                    value={profile.companyName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`mt-2 border-2 ${
                      isEditing ? "border-blue-500" : "border-blue-300"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Email
                  </Typography>
                  <Input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`mt-2 border-2 ${
                      isEditing ? "border-blue-500" : "border-blue-300"
                    }`}
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Mobile Number
                  </Typography>
                  <Input
                    type="text"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`mt-2 border-2 ${
                      isEditing ? "border-blue-500" : "border-blue-300"
                    }`}
                  />
                </div>

                {/* Subjects Taught */}
                <div>
                  <Typography variant="small" className="font-medium text-gray-700">
                    Subjects Taught
                  </Typography>
                  <Textarea
                    name="subjects"
                    value={profile.subjects}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`mt-2 border-2 ${
                      isEditing ? "border-blue-500" : "border-blue-300"
                    }`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {isEditing ? (
                  <Button
                    color="blue"
                    onClick={handleSave}
                    className="w-full sm:w-auto"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    color="blue"
                    onClick={() => setIsEditing(true)}
                    className="w-full sm:w-auto"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  color="red"
                  onClick={handleDeleteAccount}
                  className="w-full sm:w-auto"
                >
                  Delete Account
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;