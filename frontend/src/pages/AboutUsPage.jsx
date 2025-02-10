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
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he wouldn&apos;t
          scroll to get here. Add a button if you want the user to see more. We
          are here to make life better.
          <br />
          <br />
          And now I look and look around and there•s so many Kanyes I&apos;ve been
          trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
          <br />
          <br />
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been trying to
          figure out the bed design for the master bedroom at our Hidden Hills
          compound...The Pablo pop up was almost a pop up of influence. All
          respect prayers and love to Phife•s family Thank you for so much
          inspiration daytime I love this new Ferg album! The Life of Pablo is
          now available for purchase I have a dream. Thank you to everybody who
          made The Life of Pablo the number 1 album in the world! I&apos;m so proud
          of the nr #1 song in the country. Panda!
        </Typography>
      </div>
      <div className="py-3">
         <Footer />
      </div>
    </section>
  );
}

export default AboutUsPage;