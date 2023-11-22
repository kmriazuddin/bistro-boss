
const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/JKwHFPb/chef-service.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-slate-100 p-8 my-6 rounded-lg">
                        <h1 className="mb-5 text-5xl font-bold text-black">Bistro Boss</h1>
                        <p className="mb-5 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;