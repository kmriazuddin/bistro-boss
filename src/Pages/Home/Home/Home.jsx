import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import Featured from "../Featured/Featured";
import HomeProducts from "../HomeProducts/HomeProducts";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Support from "../Support/Support";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Slider></Slider>
            <CategoriesSlider></CategoriesSlider>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Support></Support>
            <HomeProducts></HomeProducts>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;