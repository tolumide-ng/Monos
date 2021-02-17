import * as React from "react";
import { CheckBox } from "../../UI/atoms/CheckBox";
import { SwitchButton } from "../../UI/atoms/Switch";
import "./index.css";

export const LandingPage = () => {
    const handleRowClick = (index: number) => {
        // if()
    };
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
                    {new Array(6).fill("_").map((row, index) => (
                        <tr
                            className="ldpg-trbody"
                            onClick={(e: React.TouchEvent | React.MouseEvent) =>
                                handleRowClick(index)
                            }
                        >
                            <td className="ldpg-td">
                                <CheckBox state={false} />
                            </td>
                            <td className="ldpg-td">CO</td>
                            <td className="ldpg-td">Jean Richardson</td>
                            <td className="ldpg-td">Jblack@palmela.com</td>
                            <td className="ldpg-td">2-(333)123-1237</td>
                            <td className="ldpg-td">
                                <SwitchButton buttonState={true} />
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* </div> */}
            </table>
        </article>
    );
};
