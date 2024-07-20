const CheckboxItem = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center justify-between">
            <span className="ml-2 text-gray-700">{label}</span>
            <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};

export default CheckboxItem;
