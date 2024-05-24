import React from 'react'
import Line from '../../Images/Line.png'
import image1 from '../../Images/image1.png'
import image2 from '../../Images/image2.png' 
import image3 from '../../Images/image3.png' 


function Section4() {
  return (
    <div className='main-sec-4 p-5'>
    <h1 className='lg:text-8xl font-bold text-white flex justify-start lg:p-[5rem]  w-[320px]: text-5xl sm:p-0'>EXPLORE MALDIVES</h1>
    <div className='flex justify-evenly mt-5 '>
    <img  src={Line} alt='Line'></img>
    </div>

    <div className='flex justify-evenly flex-wrap mt-14 '>
   <div>
    <div>
    <p className='text-white  flex justify-start  lg:w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
    <div className='w-[150px] h-[40px] bg-white rounded-2xl flex justify-center mt-8'>
    <button className='text-lg font-bold'>see all</button>
    </div>
   </div>
 <div>
 </div>
 <div className='flex gap-5 w-[320px]: mt-9'> 
    <div>
        <img  src={image1} alt='image1'></img>
    </div>
    <div>
        <img src={image2} alt='image2'></img>
    </div>
    <div>
        <img src={image3} alt='image3'></img>
    </div>
 </div>
 </div>
    </div>
  )
}

export default Section4