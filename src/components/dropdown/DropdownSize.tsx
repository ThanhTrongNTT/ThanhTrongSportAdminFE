import React from "react";
import classNames from "@/utils/classNames";
import { Size } from "@/data/Interface";

type PropTypes = {
    field: any;
    dropdownLabel: string;
    list: Array<Size>;
    className?: string;
};

const DropdownSize = ({
    field,
    dropdownLabel = "",
    list = [],
    className = "",
}: PropTypes) => {
    const { value, onChange } = field;

    return (
        <select
            value={value?.id || ""}
            onChange={(e) => {
                const selectedSize = list.find(
                    (size) => size.id === e.target.value
                );
                onChange(selectedSize);
            }}
            className={classNames(
                "px-5 py-3 rounded-md border border-c6 text-lg",
                className
            )}
        >
            <option value="" disabled>
                {dropdownLabel}
            </option>
            {list.map((item, index) => (
                <option value={item.id} key={index}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default DropdownSize;
