import * as React from "react";
import { UserDef } from "../../../../commonTypes";
import { CheckBox } from "../../atoms/CheckBox";
import { SwitchButton } from "../../atoms/Switch";
import "./index.css";

interface TabelRowDef {
    row: UserDef;
}

export const TableRow = (props: TabelRowDef) => {
    const handleRowClick = (e: React.TouchEvent | React.MouseEvent) => {
        // if()
    };

    return (
        <tr className="ldpg-trbody tbrow" onClick={handleRowClick}>
            <td className="ldpg-td">
                <CheckBox state={false} />
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
