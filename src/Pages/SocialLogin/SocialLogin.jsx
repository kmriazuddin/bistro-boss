import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {googleLogIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="flex justify-between items-center text-center m-auto">
            <button onClick={handleGoogleLogIn} className="btn flex items-center gap-2">
                <FaGoogle className="text-4xl"></FaGoogle>
                <h1 className="text-xl">Google</h1>
            </button>
        </div>
    );
};

export default SocialLogin;