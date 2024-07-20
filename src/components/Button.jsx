
const Button = ({text="Done"}) => {
    return (
        <button className="mt-6 w-full bg-[#ffce22] text-white py-2 rounded-md hover:bg-[#ffd84d]">
            {text}
        </button>
    );
};

export default Button;

