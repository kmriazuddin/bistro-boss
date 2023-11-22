import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";

const FoodOrderCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [, refetch] = useCart();
    
    const handleAddToFood = () => {
        if(user && user?.email){
            // Send Cart Item To The Database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    // Refetch Cart To Update The Cart Items
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You Are Not Login!",
                text: "Please Login Then Add To The Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  // Send The User To The Login Page
                  navigate('/login', {state: {from: location}});
                }
              });
        }
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="bg-no-repeat bg-center" src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-5 px-2 py-1">${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-center m-auto">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <div onClick={handleAddToFood} className="card-actions justify-center">
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodOrderCard;