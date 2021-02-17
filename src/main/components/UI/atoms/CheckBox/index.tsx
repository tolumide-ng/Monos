import * as React from "react";
import "./index.css";

interface CheckBoxDef {
    state: boolean;
}

export const CheckBox = (props: CheckBoxDef) => {
    return (
        <label htmlFor="" className="check">
            <input
                type="checkbox"
                name=""
                id=""
                className="check-input"
                checked={props.state}
            />
            <span className="check-mark"></span>
        </label>
    );
};
