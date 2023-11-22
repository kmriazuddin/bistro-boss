import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/k0wdWzz/Untitled-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/8b56Ppz/Slider-2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Bz1Fm6j/Slider-3.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/xG5LQ8V/Slider-4.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/xGkHYpj/Slider-5.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/6swTtV8/Slider-6.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;