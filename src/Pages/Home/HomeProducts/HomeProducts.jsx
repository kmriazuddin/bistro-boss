import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const HomeProducts = () => {
    return (
        <div className="my-20">
            <SectionTitle subHeading="Should Try" heading="Chef Recommends"></SectionTitle>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 justify-between gap-5 m-auto">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="bg-no-repeat bg-center" src="https://i.ibb.co/brPtzq8/card.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center m-auto">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-slate-200 border-b-4 border-yellow-500">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="bg-no-repeat bg-center" src="https://i.ibb.co/brPtzq8/card.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center m-auto">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active btn-neutral text-yellow-500">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="bg-no-repeat bg-center" src="https://i.ibb.co/brPtzq8/card.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title m-auto">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-slate-200 border-b-4 border-yellow-500">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;