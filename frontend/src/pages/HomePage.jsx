import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import HomeNav from "../components/HomeNav"
import TeamSection from "../components/TeamSection"

const HomePage = () => {
   return (
      <>
      <div className="p-2 flex flex-col items-center justify-center">
         <HomeNav />
         <HeroSection />
         <TeamSection />
         <Footer />
         <h1 className="text-3xl">this is home page</h1>
         
      </div>
      </>
   )
}

export default HomePage