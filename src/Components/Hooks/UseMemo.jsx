import React,{useState,useMemo} from 'react'

function UseMemo() {
    const[Num,setNum] = useState(0);
    const[show,setShow] = useState(true);

    const getvalue = () =>{
        return setNum(Num+1);
    }
   

    const Countnumber = (num) =>{
        for(let i = 0; i < 1000000; i++){}
            return num;
    
    }
    const checkdata = useMemo( () => {
        return Countnumber(Num)
         },[Num]);

  return (
    //to increase the perfomance of react Application//
    //use memeo hookreturn memeoized value and use callback return memeoized function
    <div className='flex flex-col justify-center p-20 gap-5'>
     <button className='w-52 h-15 flex justify-center p-5 text-lg text-white bg-red-600 rounded-lg' onClick={getvalue}>Count</button> 
     <h1 className='text-black text-lg font-bold p-10'>My number is: {checkdata}</h1>
     <button  className='w-52 h-15 flex justify-center text-lg text-white bg-gray-600 p-5 rounded-lg' 
     onClick={() => setShow(!show)}>{
       show ? 'Shwoing performace' : 'click me'
     }
     </button> 

    </div>
  )
}

export default UseMemo