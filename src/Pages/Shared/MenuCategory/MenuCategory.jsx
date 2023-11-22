import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItems from "../MenuItems/MenuItems";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="py-4">
            {title && <Cover img={coverImg} title={title} description={'Would you like to try a dish?'}></Cover>}
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;