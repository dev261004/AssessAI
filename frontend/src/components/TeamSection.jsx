import {
   Card,
   CardBody,
   Avatar,
   IconButton,
   Typography
 } from "@material-tailwind/react"
 
 function TeamCard({ img, name, title }) {
   return (
     <Card className="rounded-lg bg-gray-100" shadow={false}>
       <CardBody className="text-center">
         <Avatar
           src={img}
           alt={name}
           variant="circular"
           size="xxl"
           className="mx-auto mb-6 object-top"
         />
         <Typography
           variant="h5"
           color="blue-gray"
           className="!font-medium text-lg"
         >
           {name}
         </Typography>
         <Typography
           color="blue-gray"
           className="mb-2 !text-base !font-semibold text-gray-600"
         >
           {title}
         </Typography>
         <div className="flex items-center justify-center gap-1.5">
           <IconButton variant="text" color="gray">
             <i className="fa-brands fa-twitter text-lg" />
           </IconButton>
           <IconButton variant="text" color="gray">
             <i className="fa-brands fa-linkedin text-lg" />
           </IconButton>
           <IconButton variant="text" color="gray">
             <i className="fa-brands fa-dribbble text-lg" />
           </IconButton>
         </div>
       </CardBody>
     </Card>
   )
 }
 
 const members = [
   {
     img: `https://res.cloudinary.com/deyfwd4ge/image/upload/v1738922567/WhatsApp_Image_2025-02-07_at_15.31.28_17594091_rrqsos.jpg`,
     name: "Kirtan Patel",
     title: "Frontend Developer"
   },
   {
     img: `https://res.cloudinary.com/deyfwd4ge/image/upload/v1738922503/WhatsApp_Image_2025-02-07_at_15.31.10_1d37bd22_dy5gyr.jpg`,
     name: "Dev Agrawal",
     title: "Ml Developer"
   },
   {
     img: `https://res.cloudinary.com/deyfwd4ge/image/upload/v1738922440/c23_rd7vaf.jpg`,
     name: "Sujal Morwani",
     title: "Database developer"
   }
 ]
 
 export function TeamSection() {
   return (
     <section className=" py-8 px-8 ">
       <div className="container mx-auto">
         <div className="mb-4 text-center lg:mb-6">
           <Typography variant="h6" color="blue-gray" className="text-lg">
             Meet the Team
           </Typography>
           <Typography
             variant="h1"
             color="blue-gray"
             className="my-2 !text-2xl lg:!text-4xl"
           >
             Behind the Success: Our Dedicated Team
           </Typography>
           <Typography
             variant="lead"
             className="mx-auto w-full !text-gray-500 max-w-4xl"
           >
             From visionary leadership to creative talent, and technical wizards,
             each team member plays a pivotal role in delivering the exceptional
             service and innovative solutions.
           </Typography>
         </div>
         <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
           {members.map((props, key) => (
             <TeamCard key={key} {...props} />
           ))}
         </div>
       </div>
     </section>
   )
 }
 
 export default TeamSection
 