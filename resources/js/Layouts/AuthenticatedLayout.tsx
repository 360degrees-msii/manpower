import { PropsWithChildren } from "react";
import { User } from "@/types";

import NavBar from "../Components/navigator/nav-bar";

export default function Authenticated({
    user,
    children,
}: PropsWithChildren<{ user: User }>) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <NavBar name={user.name} />
                <main>{children}</main>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu min-h-screen bg-base-200 text-base-content w-80 p-4">
                    <li><a>Test 1</a></li>
                    <li><a>Test 2</a></li>
                    <li><a>Test 3</a></li>
                    <li><a>Test 4</a></li>
                </ul>
            </div>
        </div>
    );
}
