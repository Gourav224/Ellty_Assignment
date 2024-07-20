import { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import Button from "./Button";

const CheckboxList = () => {
    const [checkedItems, setCheckedItems] = useState({
        all: false,
        page1: false,
        page2: false,
        page3: false,
        page4: false,
    });

    const pages = ["page1", "page2", "page3", "page4"];

    const handleAllChange = (e) => {
        const isChecked = e.target.checked;
        const newCheckedItems = {
            all: isChecked,
        };
        pages.forEach((page) => {
            newCheckedItems[page] = isChecked;
        });
        setCheckedItems(newCheckedItems);
    };

    const handleChange = (e, page) => {
        const newCheckedItems = {
            ...checkedItems,
            [page]: e.target.checked,
        };

        const allChecked = pages.every((page) => newCheckedItems[page]);
        newCheckedItems.all = allChecked;

        setCheckedItems(newCheckedItems);
    };

    return ( 
        <div className="bg-white p-8 rounded-lg shadow-md w-80 ">
            <div className="border-b-[1px] py-2 border-black mb-4">
                <CheckboxItem
                    label="All pages"
                    checked={checkedItems.all}
                    onChange={handleAllChange}
                />
            </div>
            <div className="space-y-4">
                {pages.map((page) => (
                    <CheckboxItem
                        key={page}
                        label={`Page ${page.slice(-1)}`}
                        checked={checkedItems[page]}
                        onChange={(e) => handleChange(e, page)}
                    />
                ))}
            </div>
            <Button text="Done"/>
        </div>
    );
};

export default CheckboxList;
