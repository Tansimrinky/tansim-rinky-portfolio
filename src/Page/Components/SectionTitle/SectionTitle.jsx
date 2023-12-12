

const SectionTitle = ({heading}) => {
    return (
        <div>
             <div className=" mx-auto text-center md:w-3/12 my-8">
            <h3 className="text-3xl uppercase border-y-4 text-[#400e0e] font-bold">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitle;