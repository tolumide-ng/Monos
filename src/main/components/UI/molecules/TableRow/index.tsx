import * as React from "react";
import { useDispatch } from "react-redux";
import { UserDef } from "../../../../commonTypes";
import { fetchUpdateUserAction } from "../../../../store/modules/specificUser/actions";
import { getInitials } from "../../../../utilities/helpers/getInitials";
import { useActionCall } from "../../../../utilities/hooks/useActionCall";
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

    const dispatch = useDispatch();

    const handleActiveState = () => {
        useActionCall({
            dispatch,
            requestFunc: fetchUpdateUserAction,
            method: "PUT",
            payload: {},
            path: `users/${props.row.id}`,
        });
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
            <td className="ldpg-td tbrow-role">
                <div className="tbrow-role--card">
                    {getInitials(props.row.type)}
                </div>
            </td>
            <td className="ldpg-td">{props.row.name}</td>
            <td className="ldpg-td">{props.row.email}</td>
            <td className="ldpg-td">{props.row.phone}</td>
            <td className="ldpg-td">
                <SwitchButton
                    buttonState={props.row.active}
                    handleActiveState={handleActiveState}
                />
            </td>
        </tr>
    );
};
