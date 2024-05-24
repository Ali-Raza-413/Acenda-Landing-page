import React from 'react'
import arrows5 from '../../Images/arrows5.png'
import stars from '../../Images/stars.png'
import Ellipse from '../../Images/Ellipse.png'

function Section6() {
  return (
    <div className='section-6 lg:p-20 '>
       <div className='flex justify-between flex-wrap'>
    <div>
        <h1 className='text-3xl text-white font-bold p-14 ml-7'>Testimonials</h1>
    </div>
    <div className="p-10 sm: ml-20">
  <img src={arrows5} alt="arrows5" />
</div>
</div>
<div className='p-10 flex flex-wrap lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4'>
    <div>
        <div className='absolute'>
    <img className='p-2' src={Ellipse} alt={Ellipse}></img>
    </div>

<div className="bg-white shadow-md rounded-lg overflow-hidden p-5">

 <div className='flex justify-between mt-20'>
    <div>
        <h1 className='text-lg font-bold'>Sebastian</h1>
        <p>Graphic design</p>
    </div>
    <div className='pt-3'>
        <img src={stars} alt='stars'></img>
    </div>
 </div>
 <p className='w-70 text-left mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

</div>

</div>
<div>
    <div className='absolute p-2'>
    <img className='pt-2' src={Ellipse} alt={Ellipse}></img>

    </div>

<div className="bg-white shadow-md rounded-lg overflow-hidden p-5">

 <div className='flex justify-between mt-20 '>
    <div>
        <h1 className='text-lg font-bold'>Sebastian</h1>
        <p>Graphic design</p>
    </div>
    <div className='pt-3'>
        <img src={stars} alt='stars'></img>
    </div>
 </div>
 <p className='w-70 text-left mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

</div>

</div>
<div>
    <div className='absolute p-2'>
    <img className='pt-2' src={Ellipse} alt={Ellipse}></img>
    </div>

<div className="bg-white shadow-md rounded-lg overflow-hidden p-5">

 <div className='flex justify-between mt-20'>
    <div>
        <h1 className='text-lg font-bold'>Sebastian</h1>
        <p>Graphic design</p>
    </div>
    <div className='pt-3'>
        <img src={stars} alt='stars'></img>
    </div>
 </div>
 <p className='w-70 text-left mt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

</div>

</div>

</div>
    </div>
  )
}

export default Section6