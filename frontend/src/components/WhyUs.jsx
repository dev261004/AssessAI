import { Card, CardBody, Typography } from "@material-tailwind/react";

const WhyUs = () => {
   return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white py-12 px-4">
         <div className="w-full max-w-3xl text-center mb-12">
            <Typography variant="h1" className="text-3xl font-semibold text-gray-900 mb-4">
               Why Choose Us?
            </Typography>
            <Typography className="text-base text-gray-700">
               We are dedicated to delivering exceptional service and quality.
            </Typography>
         </div>
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full max-w-3xl">
            <Card className="border border-gray-200 rounded-lg">
               <CardBody className="p-6">
                  <Typography className="text-lg font-medium text-gray-800 mb-2">
                     High-accuracy assignment evaluation
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                     We ensure every product meets the highest standards.
                  </Typography>
               </CardBody>
            </Card>
            <Card className="border border-gray-200 rounded-lg">
               <CardBody className="p-6">
                  <Typography className="text-lg font-medium text-gray-800 mb-2">
                     24/7 customer support
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                     Our team is here to assist you every step of the way.
                  </Typography>
               </CardBody>
            </Card>
            <Card className="border border-gray-200 rounded-lg">
               <CardBody className="p-6">
                  <Typography className="text-lg font-medium text-gray-800 mb-2">
                     Unbiased evaluation for all Students
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                     We treat all students equally and fairly.
                  </Typography>
               </CardBody>
            </Card>
            <Card className="border border-gray-200 rounded-lg">
               <CardBody className="p-6">
                  <Typography className="text-lg font-medium text-gray-800 mb-2">
                     Easy to use and navigate
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                     Our platform is designed with user experience in mind.
                  </Typography>
               </CardBody>
            </Card>
         </div>
         <div className="w-full max-w-3xl text-center mt-12">
            <Typography variant="h2" className="text-2xl font-semibold text-gray-900 mb-4">
               Our Mission
            </Typography>
            <Typography className="text-base text-gray-700 mb-2">
               To provide the best products and services to our customers.
            </Typography>
            <Typography className="text-base text-gray-700 mb-2">
               We strive to exceed your expectations.
            </Typography>
            <Typography className="text-base text-gray-700">
               Your satisfaction is our top priority.
            </Typography>
         </div>
      </div>
   );
};

export default WhyUs;