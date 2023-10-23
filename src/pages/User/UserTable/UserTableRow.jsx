import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserTableRow = ({ user }) => {
    const navigate = useNavigate();
    return (
        <>
            <tr className="border-bottom">
                <td className="text-muted fs-15 fw-semibold text-center">{user.id}</td>
                <td>
                    <div className="d-flex">
                        <span className="avatar avatar-md brround mt-1" onClick={()=> navigate(`/users/profile?userId=${user.id}#Profile`)} style={{ backgroundImage: `url(${user.image})` }}></span>
                        <div className="ms-2 mt-0 mt-sm-2 d-block">
                            <h6 className="mb-0 fs-14 fw-semibold">{`${user.firstName} ${user.lastName}`}</h6>
                            <span className="fs-12 text-muted">{user.email}</span>
                        </div>
                    </div>
                </td>
                <td className="text-muted fs-15 fw-semibold">{user.birthDate} </td>
                <td className="text-muted fs-15 fw-semibold">{user.bloodGroup}</td>
                <td className="text-muted fs-15 fw-semibold">{user.age}</td>
                <td className="">
                    <a className="btn btn-primary btn-sm rounded-11 me-2" href='/' data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
                    <a className="btn btn-danger btn-sm rounded-11" href='/' data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
                </td>
            </tr>
        </>
    )
}

export default UserTableRow;

