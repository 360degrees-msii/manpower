import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TableRow = ({ employee }: { employee: EmployeeModel }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            {
                                employee.image === '' ? <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                        <span className="text-base">{employee.name.charAt(0)}</span>
                                    </div>
                                </div> :
                                    <img
                                        src={employee.image}
                                        alt="Employee Profile" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{employee.name}</div>
                        <div className="text-sm opacity-50">{employee.position}</div>
                    </div>
                </div>
            </td>
            <td>
                {employee.phone}
                <br />
                <span className="badge badge-ghost badge-sm">{employee.email}</span>
            </td>
            <td> <FontAwesomeIcon icon={faLocationDot} /> {employee.address}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{employee.premed.dt ? "DT" : null}</button>
                <button className="btn btn-ghost btn-xs">{employee.premed.me ? "ME" : null}</button>
                <button className="btn btn-ghost btn-xs">{employee.premed.ec ? "EC" : null}</button>
                <button className="btn btn-ghost btn-xs">{employee.premed.he ? "HE" : null}</button>
                <button className="btn btn-ghost btn-xs">{employee.premed.ur ? "UR" : null}</button>
                <button className="btn btn-ghost btn-xs">{employee.premed.pa ? "PA" : null}</button>
                <br/>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "LO" : null}</button>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "CS" : null}</button>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "WH" : null}</button>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "PT" : null}</button>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "HW" : null}</button>
                <button className="btn btn-ghost text-orange-300 btn-xs">{employee.premed.dt ? "FT" : null}</button>
            </th>
            <td className="space-x-1 ">
                <div className="badge badge-success text-white">{employee.status}</div>
                {employee.deployed && <div className="badge bg-info text-white">deployed</div>}
            </td>
            <th>
                <button className="btn btn-xs btn-outline btn-secondary">201</button>
            </th>
        </tr>
    )
}


export interface EmployeeModel {
    id: number,
    image: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    address: string,
    premed: {
        dt: boolean,
        me: boolean,
        rr: boolean,
        he: boolean,
        ur: boolean,
        pa: boolean,
        ec: boolean,
        lo: boolean,
        cs: boolean,
        wh: boolean,
        pt: boolean,
        hw: boolean,
        ft: boolean
    },
    status: 'semiActive' | 'inActive' | 'active',
    deployed: boolean,
}