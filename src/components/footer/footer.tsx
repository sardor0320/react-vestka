
import len3 from "../../assets/Line 3.png"



export default function Footer() {
  return (
    
    <div className="w-full max-w-[1310px] m-auto p-[20px] py-20">
     
      <div>
        <img src={len3} alt="" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-between text-white flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-auto text-center sm:text-left mb-3 sm:mb-0">
          Copyright © 2022 DOML. All rights reserved.
        </div>
        <div className="w-full sm:w-auto text-center sm:text-right">
          Terms of Use & Privacy Policy
        </div>
      </div>
    </div>
  )
}
