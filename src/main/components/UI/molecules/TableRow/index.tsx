import * as React from "react";
import { UserDef } from "../../../../commonTypes";
import { CheckBox } from "../../atoms/CheckBox";
import { SwitchButton } from "../../atoms/Switch";
import "./index.css";

interface TabelRowDef {
    row: UserDef;
    selected: Array<string>;
    handleRowClick: (index: string) => void;
}

export const TableRow = (props: TabelRowDef) => {
    const handleClick = () => {
        props.handleRowClick(props.row.id);
    };
    return (
        <tr className="ldpg-trbody tbrow">
            <td className="ldpg-td" onClick={handleClick}>
                <CheckBox
                    handleClick={handleClick}
                    rowId={props.row.id}
                    selected={props.selected}
                />
            </td>
            <td className="ldpg-td">CO</td>
            <td className="ldpg-td">{props.row.name}</td>
            <td className="ldpg-td">{props.row.email}</td>
            <td className="ldpg-td">{props.row.phone}</td>
            <td className="ldpg-td">
                <SwitchButton buttonState={true} />
            </td>
        </tr>
    );
};
