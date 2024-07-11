import React from 'react'
import { NavbarComponent } from '../../components/marketing/NavbarComponent'
import { TopSection } from '../../components/marketing/TopSection'
import ServiceSection from '../../components/marketing/ServiceSection'
import AticalSection from '../../components/marketing/AticalSection'

const MarketingTemplate = () => {
  return (
    <div>
      <div  className="mx-60">
      <NavbarComponent/>
      </div>
      <div className='mt-32 mx-60'>
      <TopSection/>
      </div>
      <br />
      <div className='w-full bg-[#292930] py-32 mt-32'>
        <ServiceSection/>
      </div>
      <div className='mt-32'>
        <AticalSection/>
      </div>
    </div>
  )
}

export default MarketingTemplate
