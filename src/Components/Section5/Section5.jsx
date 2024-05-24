import React from 'react'
import arrows2 from '../../Images/arrows2.png'
import slid1 from '../../Images/slid1.png'
import slid2 from '../../Images/slid2.png'
import slid3 from '../../Images/slid3.png'
import calendar from '../../Images/calendar.png'
import Rect10 from '../../Images/Rect10.png'





function Section5() {

  return (
    <div className='bg-white lg:p-20'>
<div className='flex justify-between flex-wrap'>
    <div>
        <h1 className='text-3xl text-black font-bold p-14 ml-7'>Feature News</h1>
    </div>
    <div className='p-14'>
    <img src={arrows2} alt="arrows2"></img>
    </div>
</div>
<div className="p-14 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
       
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img src={slid1} className="w-full object-cover" />
            <div className="flex gap-1 p-5">
                <div>
                <img src={calendar} alt='calendar' width="32" height="32"></img>
                </div>
                <div><p className='opacity-90 m-1'>February 20, 2024</p></div>
            </div>
            <div className='ml-5'><h1 className='text-3xl font-bold text-black'>Delicious restaurant at Hanalei Bay</h1></div>
            <div><p className='lg:w-80 text-center m-3 '>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p></div>
            <div className='flex gap-3 p-5 justify-start'>
                <div className=''><img src={Rect10} alt='Rect10'></img></div>
                <div className='mb-2'><p className='text-lg font-bold text-[#008395]'>see more</p></div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img src={slid2} className="w-full object-cover" />
            <div className="flex gap-1 p-5">
                <div>
                <img src={calendar} alt='calendar' width="32" height="32"></img>

                </div>
                <div><p className='opacity-90 m-1'>February 20, 2024</p></div>
            </div>
            <div className='ml-5 '><h1 className='text-3xl font-bold text-black '>Top 10 most beautiful check-in spots in Ph ...</h1></div>
            <div><p className='lg:w-80 text-center m-3 '>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p></div>
            <div className='flex gap-3 p-5 justify-start'>
                <div className=''><img src={Rect10} alt='Rect10'></img></div>
                <div className='mb-2'><p className='text-lg font-bold text-[#008395]'>see more</p></div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img src={slid3} className="w-full object-cover" />
            <div className="flex gap-1 p-5">
                <div>
                <img src={calendar} alt='calendar' width="32" height="32"></img>

                </div>
                <div><p className='opacity-90 m-1'>February 20, 2024</p></div>
            </div>
            <div className='ml-5'><h1 className='text-3xl  font-bold text-black'>Top 5 newest services at Navagio Beach</h1></div>
            <div><p className='lg:w-80 text-center m-3 '>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p></div>
            <div className='flex gap-3 p-5 justify-start'>
                <div className=''><img src={Rect10} alt='Rect10'></img></div>
                <div className='mb-2'><p className='text-lg font-bold text-[#008395]'>see more</p></div>
            </div>
          </div>

 </div>
 </div>
 
)
}

export default Section5