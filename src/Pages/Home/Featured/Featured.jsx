
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-items text-white bg-fixed">
            <SectionTitle 
            subHeading={"Check it out"} 
            heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-16">
                <div>
                    <img src="https://i.ibb.co/n3kGbM8/Featured.jpg" alt="Image" />
                </div>
                <div className="md:ml-10 bg-slate-400 bg-opacity-70 p-3 rounded-lg space-y-2">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline btn-warning">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;