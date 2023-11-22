import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxios();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        // Image Upload To Imgbb And Then Get An URL
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // Now Send The Menu Item Data To The Server With The Image URL
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // Send The Data
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            if (menuRes.data.modifiedCount > 0) {
                // Show Success Popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} Is Updated To The Menu!`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }
    };

    return (
        <div>
            <SectionTitle subHeading={'Update Item'} heading={'Update Information'}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })} defaultValue={name} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register('category', { required: true })} defaultValue={category} className="select select-bordered w-full">
                                <option disabled value="default">Select A Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} defaultValue={price} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe")} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details..."></textarea>
                    </div>
                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn">Update Menu Items <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;