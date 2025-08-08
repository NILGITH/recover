import { useState } from "react"
import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import About from "@/components/About"
import Services from "@/components/Services"
import References from "@/components/References"
import Partners from "@/components/Partners"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider className="-mt-16" />
      <About />
      <Services />
      <References />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}
