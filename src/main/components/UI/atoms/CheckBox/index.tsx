import * as React from "react";
import "./index.css";

interface CheckBoxDef {
    handleClick: (index: string) => void;
    selected: Array<string>;
    rowId: string;
}

export const CheckBox = (props: CheckBoxDef) => {
    const handleChange = (e: React.ChangeEvent) => {
        props.handleClick(props.rowId);
    };

    return (
        <label htmlFor="" className="check">
            <input
                type="checkbox"
                name=""
                id=""
                className="check-input"
                checked={props.selected?.includes(props.rowId)}
                onChange={handleChange}
            />
            <span className="check-mark"></span>
        </label>
    );
};
