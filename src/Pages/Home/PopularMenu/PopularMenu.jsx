import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="mb-10 space-y-10">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center m-auto ">
                <button className="btn btn-error">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;