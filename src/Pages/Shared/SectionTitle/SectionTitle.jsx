
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-6'>
            <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
            <h3 className='uppercase text-4xl border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;