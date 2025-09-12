import AboutSection from '@/components/gstComponents/AboutSection'
import CoreValues from '@/components/gstComponents/CoreValues'
import Footer from '@/components/gstComponents/Footer'
import Navbar from '@/components/gstComponents/Navbar'
import ProcessSection from '@/components/gstComponents/ProcessSection'
import CompanySection from '@/components/gstComponents/CompanySection'
import React from 'react'

const Page = () => {
  return (
   <>
   <Navbar />
   <CompanySection/>
      <section className="bg-[#41001f] w-full">
        <AboutSection />
        <ProcessSection/>
        {/* <CoreValues/> */}
        <Footer/>
      </section>
   </>
  )
}

export default Page
