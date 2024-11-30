import React from 'react'
import img1 from '../../assets/Group 24.png'
import img2 from '../../assets/Group 25.png'
import img3 from '../../assets/Group 26.png'

function Moote() {
  return (
    <div className=' w-[1300px] m-auto p-[10px] pt-20 '>
        <div className=" flex flex-col gap-9">
        <img src={img1} alt="Company logo" />
        <img src={img2} alt="Company logo" />
        <img src={img3} alt="Company logo" />
        </div>
        

      <h1 className='text-white text-center pt-14 pb-5'>Trusted by the world’s most ambitious teams.</h1>
    </div>
  )
}

export default Moote;