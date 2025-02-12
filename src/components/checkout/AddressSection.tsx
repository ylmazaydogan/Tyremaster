const AddressSection = ({title}:{title:string}) => {
    return (
        <div className="flex items-center">
        <h2 className="text-4xl font-bold uppercase text-black">{title}</h2>
        <div className="flex-grow h-px ml-4 bg-light-silver"></div>
      </div>
    );
};

export default AddressSection;