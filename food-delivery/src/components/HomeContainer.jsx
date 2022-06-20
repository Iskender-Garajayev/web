import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../Utils/Data'



const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full '>
      <div className=' py-2 flex-1 flex flex-col items-start md:items-start justify-start gap-6'>
        <div className=' flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className=' text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className=' w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img className=' w-full h-full object-contain' src={Delivery} alt="delivery" />
          </div>
        </div>
        <p className=' text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <soan className='text-orange-500 lg:text-[5rem] text-[3rem]'>Your City</soan></p>
        <p className=' text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit illo pariatur totam voluptatum error aliquid nobis excepturi? Repudiandae eius repellendus aperiam ad consequuntur excepturi, dolorem quis, cumque temporibus maiores sunt?</p>
        <button className=' bg-gradient-to-br from-orange-300 to-orange-500 w-full px-4 py-2 md:w-auto rounded-lg hover:shadow-lg transition-all ease-in-out duration-100' type='button'>Order New</button>
      </div>
      <div className=' py-2 flex-1 flex items-center relative'>
        <img className=' ml-auto h-420 lg:w-auto lg:h-650' src={HeroBg} alt="HeroBg" />

        <div className=' w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap'>
          {heroData && heroData.map(n=>(
             <div key={n.id} className=' drop-shadow-lg md lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
             <img className=' w-20 lg:w-40 -mt-10 lg:-mt-20' src={n.imageSrc} alt="I1" />
             <p className=' text-base lg:text-xl font-semibold text-textColor mt-2  lg:mt-4'>{n.name}</p>
             <p className=' text-[17px] lg:text-sm text-lighttextGrey font-semibold my-1 lg:my-3'>{n.desp}</p>
             <p className='text-sm font-semibold text-headingColor'><span className=' text-xs text-red-600'>$ </span>{n.price}</p>
           </div>
          ))}
          
         
        </div>
      </div>
    </section>
  )
}

export default HomeContainer