import * as React from "react";
import "./index.css";

interface SwitchButtonDef {
    buttonState: boolean;
}

export const SwitchButton = (props: SwitchButtonDef) => {
    const [buttonState, setButtonState] = React.useState(false);
    const handlClick = (e: React.TouchEvent | React.MouseEvent) => {
        setButtonState(!buttonState);
    };
    return (
        <button
            className={`switchbutton-switch ${
                buttonState
                    ? "switchbutton-switch--active"
                    : ".switchbutton-switch--inactive"
            }`}
            type="button"
            onClick={handlClick}
        >
            <div
                className={`switchbutton-ball ${
                    buttonState
                        ? "switchbutton-ball--active"
                        : "switchbutton-ball--inactive"
                }`}
            ></div>
        </button>
    );
};
