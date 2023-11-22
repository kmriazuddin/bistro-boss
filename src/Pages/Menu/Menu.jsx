import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCategory from '../Shared/MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={'https://i.ibb.co/rQjwXqZ/banner3.jpg'} title={'Our Menu'} description={'Would you like to try a dish?'}></Cover>
            {/* Offered Section */}
            <SectionTitle subHeading={`Don't miss`} heading={`TODAY'S OFFER`}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserts Section */}
            <MenuCategory items={desserts} title={'dessert'} coverImg={'https://i.ibb.co/TM3nv9p/dessert-bg.jpg'}></MenuCategory>
            {/* Pizza Section */}
            <MenuCategory items={pizza} title={'pizza'} coverImg={'https://i.ibb.co/DL65dWF/pizza-bg.jpg'}></MenuCategory>
            {/* Salads Section */}
            <MenuCategory items={salad} title={'salad'} coverImg={'https://i.ibb.co/rfns7Z7/salad-bg.jpg'}></MenuCategory>
            {/* Soup Section */}
            <MenuCategory items={soup} title={'soup'} coverImg={'https://i.ibb.co/SdV6bL9/soup-bg.jpg'}></MenuCategory>
        </div>
    );
};

export default Menu;