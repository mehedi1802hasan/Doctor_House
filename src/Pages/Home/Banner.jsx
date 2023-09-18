import React from 'react';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/VxVV7R8/Rectangle-1.png")',
    };

    return (
        <div className="bg-cover bg-center h-[600px] " style={bannerStyle}>
<div className="max-w-screen-lg mx-auto md:mx-auto md:flex items-center h-[600px] text-white">
                <div>
                    <h4 className='text-6xl'>Your Best Medical <br /> Help Center</h4>
                    <p className='my-7'>Lorem Ipsum is simply dummy text they are printing typesetting  <br />has been the industry’s stardard.</p>
                    <button className='btn btn-warning'>All service</button>
                </div>
               
                <div className='flex mt-40'>
                    <div>  <img src="https://i.ibb.co/RBq11bB/Rectangle-20077.png" alt="" className='h-72 w-72' /></div>
                      <div className='mt-28  -ml-36'><img src="https://i.ibb.co/X4mK7nW/Rectangle-20076.png" alt="" className='h-72 w-72' /></div>
                    <div className='-mt-28 -ml-32'><img src="https://i.ibb.co/Wkfcjb3/Rectangle-20075.png" alt="" className='h-72 w-72' /></div>
                </div>


            </div>
        </div>
    );
};

export default Banner;
