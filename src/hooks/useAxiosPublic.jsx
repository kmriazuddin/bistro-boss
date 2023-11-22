import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss.onrender.com'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;