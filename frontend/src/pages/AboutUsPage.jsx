import { Typography } from "@material-tailwind/react";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

export function AboutUsPage() {
  return (
    <section className="px-8">
      <div className="py-2">
         <HomeNav />
      </div>
      <div className="mx-auto max-w-screen-md">
        <img
          src={`https://www.material-tailwind.com/img/content2.jpg`}
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-4 font-black text-4xl !leading-snug"
        >
          About Us...
        </Typography>
        <Typography className="font-normal !text-gray-500">
Assess AI is an intelligent assignment evaluation platform designed to automate and streamline the grading process for educators and institutions. By leveraging advanced AI algorithms, we provide accurate, unbiased, and efficient assessment of assignments, ensuring fair evaluation while saving time and effort.
<br />
Our mission is to revolutionize the academic assessment process by integrating AI-driven evaluation, reducing manual workload, and enhancing feedback quality for students. We strive to make grading more efficient, transparent, and insightful.

        </Typography>
      </div>
      <div className="py-3">
         <Footer />
      </div>
    </section>
  );
}

export default AboutUsPage;