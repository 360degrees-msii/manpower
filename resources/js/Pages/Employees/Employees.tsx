import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { faPlus, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmployeeModel, TableRow } from "@/Components/table/table-row";

export default function Employees({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Employees List" />
            <div className="p-4">
                <div className=" flex gap-4 navbar bg-base-100">
                    <div className="flex-1 gap-2">
                        <p className="text-xl font-bold">Employees list </p>
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost m-1"
                            >
                                <FontAwesomeIcon icon={faSliders} />
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button
                            className="btn btn-accent"
                            onClick={() => document.getElementById("my_modal_4").showModal()
                            }
                        >
                            <div>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            add
                        </button>
                    </div>

                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered w-24 md:w-auto"
                            />
                        </div>
                        <div className="dropdown dropdown-end">
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contacts</th>
                                <th>Address</th>
                                <th>Premed | Certificate</th>
                                <th>Status</th>
                                <th>Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow employee={employee[0]} />
                            <TableRow employee={employee[1]} />
                            <TableRow employee={employee[2]} />
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Contacts</th>
                                <th>Address</th>
                                <th>Premed | Certificates</th>
                                <th>Status</th>
                                <th>Others</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            {/* Modal */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-16/18 max-w-full">
                    <h3 className="font-bold text-lg">Profile</h3>

                    <div className="flex justify-evenly">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="First name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Middle name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Middle name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Last name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Name Extension
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Name Extension"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                    </div>

                    <div className="flex justify-evenly">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nationality</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Nationality"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Gender</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>
                                    Choose Gender
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Position</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>
                                    Select Position
                                </option>
                                <option>ISO</option>
                                <option>PMO</option>
                                <option>Admin Staff</option>
                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Date Hired</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Date hired"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </AuthenticatedLayout>
    );
}

const employee: EmployeeModel[] = [
    {
        id: 4524,
        image: "",
        name: "Chris Brown",
        position: "Corporate Singer & Dancer Specialist",
        phone: "0255456554",
        email: "Lolo@gmail.com",
        address: "Palao, Iligan City",
        premed: {
            dt: true,
            me: true,
            rr: true,
            he: true,
            ur: true,
            pa: true,
            ec: true,
        },
        status: "active",
        deployed: true,
    },
    {
        id: 4524,
        image: "",
        name: "Chris Brown",
        position: "Corporate Singer & Dancer Specialist",
        phone: "0255456554",
        email: "Lolo@gmail.com",
        address: "Palao, Iligan City",
        premed: {
            dt: true,
            me: true,
            rr: true,
            he: true,
            ur: true,
            pa: true,
            ec: true,
        },
        status: "active",
        deployed: true,
    },
    {
        id: 4524,
        image: "",
        name: "Chris Brown",
        position: "Corporate Singer & Dancer Specialist",
        phone: "0255456554",
        email: "Lolo@gmail.com",
        address: "Palao, Iligan City",
        premed: {
            dt: true,
            me: true,
            rr: true,
            he: true,
            ur: true,
            pa: true,
            ec: true,
        },
        status: "active",
        deployed: true,
    },
];
