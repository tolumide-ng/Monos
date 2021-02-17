import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDef } from "../../../commonTypes";
import { fetchUsersAction } from "../../../store/modules/allUsers/actions";
import { RootState } from "../../../store/modules/types";
import { useActionCall } from "../../../utilities/hooks/useActionCall";
import { CheckBox } from "../../UI/atoms/CheckBox";
import { SwitchButton } from "../../UI/atoms/Switch";
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
            <h1>this is the landing page of the application</h1>
            <table className="ldpg-table">
                {/* <div className="ldpg-tablecont"> */}
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
                        ? users.map((row, index) => (
                              <tr
                                  className="ldpg-trbody"
                                  onClick={(
                                      e: React.TouchEvent | React.MouseEvent
                                  ) => handleRowClick(index)}
                              >
                                  <td className="ldpg-td">
                                      <CheckBox state={false} />
                                  </td>
                                  <td className="ldpg-td">CO</td>
                                  <td className="ldpg-td">Jean Richardson</td>
                                  <td className="ldpg-td">
                                      Jblack@palmela.com
                                  </td>
                                  <td className="ldpg-td">2-(333)123-1237</td>
                                  <td className="ldpg-td">
                                      <SwitchButton buttonState={true} />
                                  </td>
                              </tr>
                          ))
                        : ""}
                </tbody>
                {/* </div> */}
            </table>
        </article>
    );
};
