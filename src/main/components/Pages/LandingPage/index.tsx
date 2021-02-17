import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDef } from "../../../commonTypes";
import { fetchUsersAction } from "../../../store/modules/allUsers/actions";
import { RootState } from "../../../store/modules/types";
import { useActionCall } from "../../../utilities/hooks/useActionCall";
import avatar from "../../../assets/user.svg";
import question from "../../../assets/question.svg";
import { TableRow } from "../../UI/molecules/TableRow";
import "./index.css";

export const LandingPage = () => {
    const [selected, setSelected] = React.useState<Array<string>>([]);
    const [selectAll, setSelectAll] = React.useState(false);

    const handleRowClick = (index: string) => {
        const previousNumbers = [...selected];

        if (selected?.includes(index)) {
            const toRemove = selected.indexOf(index);
            previousNumbers.splice(toRemove, 1);
            setSelected(previousNumbers);
            return;
        }
        previousNumbers.push(index);
        setSelected(previousNumbers);
        return;
    };

    const handleSelectAll = () => {
        console.log("within here");
        const allIds: Array<string> = [];

        if (!selectAll) {
            users?.forEach((user) => {
                allIds.push(user.id);
            });

            console.log("HERE NOW", allIds);
        }
        setSelectAll(!selectAll);
        setSelected(allIds);
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
                        <p className="ldpg-selected">
                            {selected?.length ?? 0} selected
                        </p>
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
                            <th className="ldpg-th" onClick={handleSelectAll}>
                                <label htmlFor="" className="check">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="check-input"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                    <span className="check-mark"></span>
                                </label>
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
                                  <TableRow
                                      key={row.id}
                                      row={row}
                                      handleRowClick={handleRowClick}
                                      selected={selected}
                                  />
                              ))
                            : ""}
                    </tbody>
                </table>
            </article>
        </article>
    );
};
