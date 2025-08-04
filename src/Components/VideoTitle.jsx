import React from 'react'

const VideoTitle = ({title,overview}) => {

  console.log("video title rendered")

 // console.log("title"+title)
  return (
    //sm:p-6 p-2 sm:mt-0 mt-28
    <div className='absolute sm:top-20 left-4 bottom-10 text-white'>
<h1 className="text-2xl font-bold pb-2 sm:text-4xl sm:font-bold">
  {title}
</h1>
     <p className='sm:w-1/4 sm:text-[0.7rem] text-left sm:block hidden '>{overview}</p>
    <div className='flex justify-start items-center w-60 sm:gap-1  gap-1 mt-1 py-1  '>
        <button className='px-2 w-24 bg-white text-black rounded active:scale-95  '>► play</button>
      <button className='px-2 w-24 bg-black text-white rounded active:scale-95 '>more Info+</button>
      </div>
 
    </div>

   
  )
}

export default VideoTitle
