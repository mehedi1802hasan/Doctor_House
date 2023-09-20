import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs';

const InformationCard = () => {
    return (
        <div className='md:flex gap-8 space-y-8 md:space-y-0 justify-center items-center px-10 md:px-0 '> 
            <div className='p-14 bg-[#07332F] text-white flex justify-center gap-4 rounded-xl'>
                    <div className='text-4xl' ><AiOutlineClockCircle/></div>
                    <div>
                    <h2 className='text-lg mb-2'>Opening Hours</h2>
                    <p className='text-sm'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                   </div>

            </div>

            <div className='p-14 bg-[#F7A582] text-white flex justify-center gap-4 rounded-xl'> 
                    <div className='text-4xl'><GoLocation/></div>
                   <div className=''>
                      <h2 className='text-lg font-semibold mb-2'>Our Locations</h2>
                     <p className='text-sm'>Dhanmondi 17, Dhaka  <br /> -1200, Bangladesh</p>
                   </div>
           </div>

            <div className='p-14 bg-[#07332F] text-white flex justify-center gap-4 rounded-xl'> 
                   <div className='text-4xl'><BsTelephoneOutbound/></div>
                   <div>
                       <h2 className='text-lg mb-2'>Contact Us</h2>
                      <p className='text-sm'>+88 01750 00 00 00  <br /> +88 01750 00 00 00</p>
                  </div>
            </div>

        </div>
    );
};

export default InformationCard;