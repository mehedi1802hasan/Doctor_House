import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const PatientSays = () => {
    const [says, setSays] = useState([]);
    useEffect(() => {
        fetch('Patient_Says.json').then(res => res.json()).then(data => setSays(data))
    }, [])
    
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[230px] my-14 md:my-24'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mb-5'>What Our Patient Says</h1>
                <p className=''>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            <div className='mt-12 w-[90%] mx-auto  rounded  p-6'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    says.map((say )=> <SwiperSlide
                        key={say.id}
                        
                    >
                        <div className='flex items-center justify-center flex-col'>
                            <img src={say.image} className='w-28 h-28 rounded-full object-cover' />
                            <div className='text-center mt-4'>
                                <h1 className='font-semibold text-xl'>{say.name}</h1>
                                <h4 className='text-sm mb-4 text-gray-500'>{say.profession}</h4>
                                <p className='w-[80%] mx-auto pb-8'>{say.says}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    );
};

export default PatientSays;

