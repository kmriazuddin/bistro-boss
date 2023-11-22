import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdAutoDelete } from "react-icons/md";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxios();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle subHeading={'My Cart'} heading={'Wanna Add More?'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Items: {cart?.length}</th>
                            <th>Total Price: {totalPrice}</th>
                            { cart.length ? <Link to="/dashboard/payment"><button className="btn btn-primary btn-sm">Pay</button></Link> : <button disabled className="btn btn-primary btn-sm">Pay</button>}
                        </tr>
                        <tr>
                            <th>
                                Total: {cart.length}
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>$ {item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost"><MdAutoDelete className="text-4xl text-red-500" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;