import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import HomeNav from "../components/HomeNav"
import TeamSection from "../components/TeamSection"
import WhyUs from "../components/WhyUs"

const HomePage = () => {
   return (
      <>
      <div className="p-2 flex flex-col items-center justify-center">
         <HomeNav />
         <HeroSection />
         <WhyUs />
         <TeamSection />
         <Footer />

         
      </div>
      </>
   )
}

export default HomePage