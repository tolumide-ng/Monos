import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDef } from "../../../commonTypes";
import { fetchUsersAction } from "../../../store/modules/allUsers/actions";
import { RootState } from "../../../store/modules/types";
import { useActionCall } from "../../../utilities/hooks/useActionCall";
import { CheckBox } from "../../UI/atoms/CheckBox";
import avatar from "../../../assets/user.svg";
import question from "../../../assets/question.svg";
import { TableRow } from "../../UI/molecules/TableRow";
import "./index.css";

export const LandingPage = () => {
    const handleRowClick = (index: number) => {
        // if()
    };
    const [users, setUsers] = React.useState<undefined | Array<UserDef>>([]);

    const dispatch = useDispatch();
    const allUsersSelector = useSelector(
        (state: RootState) => state.fetchUsersReducer
    );

    React.useEffect(() => {
        if (allUsersSelector.status === "rest") {
            useActionCall({
                dispatch,
                requestFunc: fetchUsersAction,
                method: "GET",
                payload: {},
                path: "users",
            });
        }

        if (allUsersSelector.status === "fetchUsersSuccess") {
            setUsers(allUsersSelector.users);
        }
    }, [allUsersSelector.status]);
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <section className="ldpg-description">
                    <div className="ldpg-left">
                        <img
                            src={avatar}
                            alt="avatar of the current user"
                            className="ldpg-avatar"
                        />
                        <h1 className="ldpg-title">Users</h1>
                    </div>
                    <div className="ldpg-right">
                        <p className="ldpg-selected">2 selected</p>
                        <img
                            src={question}
                            alt="hint on what the number stands for"
                            className="ldpg-question"
                        />
                    </div>
                </section>
                <table className="ldpg-table">
                    <thead className="ldpg-thead">
                        <tr className="ldpg-tr">
                            <th className="ldpg-th">
                                <CheckBox state={false} />
                            </th>
                            <th className="ldpg-th">type</th>
                            <th className="ldpg-th">name</th>
                            <th className="ldpg-th">email</th>
                            <th className="ldpg-th">telephone</th>
                            <th className="ldpg-th">status</th>
                        </tr>
                    </thead>
                    <tbody className="ldpg-tbody">
                        {allUsersSelector.status === "fetchUsersSuccess" &&
                        users?.length
                            ? users.map((row) => (
                                  <TableRow key={row.id} row={row} />
                              ))
                            : ""}
                    </tbody>
                </table>
            </article>
        </article>
    );
};
