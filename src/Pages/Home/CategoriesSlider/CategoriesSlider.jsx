import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const CategoriesSlider = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/x8Xsp7L/slide1.jpg" alt="Slider" />
                    <h3 className='text-lg lg:text-3xl uppercase text-center -mt-16 text-slate-50'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/S7GJ9XF/slide2.jpg" alt="Slider" />
                    <h3 className='text-lg lg:text-3xl uppercase text-center -mt-16 text-slate-50'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jGT5FZ9/slide3.jpg" alt="slider" />
                    <h3 className='text-lg lg:text-3xl uppercase text-center -mt-16 text-slate-50'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/bHRPqJr/slide4.jpg" alt="Slider" />
                    <h3 className='text-lg lg:text-3xl uppercase text-center -mt-16 text-slate-50'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/x8Xsp7L/slide1.jpg" alt="Slider" />
                    <h3 className='text-lg lg:text-3xl uppercase text-center -mt-16 text-slate-50'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategoriesSlider;