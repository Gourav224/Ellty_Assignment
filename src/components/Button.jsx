
const Button = ({ text = "Done" }) => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button
            className="mt-6 w-full bg-[#ffce22] text-white py-2 rounded-md hover:bg-[#ffd84d]"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
