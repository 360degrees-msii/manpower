import { Moon, Sun } from "../../../assets/svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBell,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ name }: { name: string }) => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-square btn-ghost"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
                <div className="navbar-end">
                    <div className="">
                        <button className="btn btn-ghost">
                            <FontAwesomeIcon icon={faBell} />
                            <span className=" badge badge-neutral">99+</span>
                        </button>
                    </div>

                    <div className="dropdown dropdown-end dropdown-bottom">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost m-1"
                        >
                            {name} <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <li>
                                <a>Profile</a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="theme-controller hidden"
                            value="light"
                        />

                        <Sun />
                        <Moon />
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
