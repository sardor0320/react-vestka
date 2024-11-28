import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import leftimg from '../../assets/18.png'

export default function Card() {
    return (
        <div className="max-w-[1400px] m-auto p-[20px] pb-10   ">
            <div className=" h-[400px] w-[100%] flex bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-lg ">
                {/*  left start */}
                <div className="w-[50%] flex mt-[-50px] h-[300px]">
                    <img className='w-[490px] h-[400px]' src={leftimg} alt="" />
                </div>
                {/* left end */}
                {/* right star*/}
                <div className="h-[300px] w-[50%]">
                    <div className=" pb-5">
                        <h1 className='text-white w-[400px] text-4xl'>Get exponential reach via <span className='font-extrabold text-white'>AI Marketing</span></h1>
                    </div>
                    <div className=" flex gap-5 mt-10">
                        <TextField id="outlined-basic" label="Enter your work email" variant="outlined" placeholder='Enter your work email' className='rounded-md' />
                        <Button variant="outlined">Get started</Button>                        </div>
                </div>
                {/* right end */}
            </div>
        </div>
    )
}
