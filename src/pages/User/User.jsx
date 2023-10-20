import React from 'react'
import user4 from "../../assests/images/users/4.jpg"
import user12 from '../../assests/images/users/12.jpg'
import user8 from '../../assests/images/users/8.jpg'
import user15 from "../../assests/images/users/15.jpg"
import user1 from "../../assests/images/users/1.jpg"
import user16 from "../../assests/images/users/16.jpg"
import './user.scss'
const User = () => {
    return (
    
            <div className="main-content app-content mt-0">
                <div className="side-app">


                    <div className="main-container container-fluid">


                        <div className="page-header">
                            <div>
                                <h1 className="page-title">User List</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Advanced Elements</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User List</li>
                                </ol>
                            </div>
                            <div className="ms-auto pageheader-btn">
                                <a href="/" className="btn btn-primary btn-icon text-white me-2">
                                    <span>
                                        <i className="fe fe-plus"></i>
                                    </span> Add Account
                                </a>
                                <a href="/" className="btn btn-success btn-icon text-white">
                                    <span>
                                        <i className="fe fe-log-in"></i>
                                    </span> Export
                                </a>
                            </div>
                        </div>

                        <div className="row row-cards">
                            <div className="col-lg-12 col-xl-12">
                                <div className="input-group mb-5">
                                    <input type="text" className="form-control" placeholder="" />
                                    <div className="input-group-text btn btn-primary">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header border-bottom-0 p-4">
                                        <h2 className="card-title">1 - 30 of 546 users</h2>
                                        <div className="page-options d-flex float-end">
                                            <div>
                                                <select className="form-control select2 w-auto">
                                                    <option value="asc">Latest</option>
                                                    <option value="desc">Oldest</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-table px-5 pb-5">
                                        <div className="table-responsive table-lg">
                                            <table className="table border table-bordered mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">Select

                                                        </th>
                                                        <th className="text-center">Photo</th>
                                                        <th >Name</th>
                                                        <th>Date</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-1" type="checkbox" /> <label className="custom-control-label" for="item-1"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user16} /></td>
                                                        <td className="text-nowrap align-middle">Adam Cotter</td>
                                                        <td className="text-nowrap align-middle"><span>09 Dec 2017</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-2" type="checkbox" /> <label className="custom-control-label" for="item-2"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user15} /></td>
                                                        <td className="text-nowrap align-middle">Pauline Noble</td>
                                                        <td className="text-nowrap align-middle"><span>26 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-3" type="checkbox" /> <label className="custom-control-label" for="item-3"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user4} /></td>
                                                        <td className="text-nowrap align-middle">Sherilyn Metzel</td>
                                                        <td className="text-nowrap align-middle"><span>27 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-4" type="checkbox" /> <label className="custom-control-label" for="item-4"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user16} /></td>
                                                        <td className="text-nowrap align-middle">Terrie Boaler</td>
                                                        <td className="text-nowrap align-middle"><span>20 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-5" type="checkbox" /> <label className="custom-control-label" for="item-5"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user4} /></td>
                                                        <td className="text-nowrap align-middle">Rutter Pude</td>
                                                        <td className="text-nowrap align-middle"><span>13 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary  badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-6" type="checkbox" /> <label className="custom-control-label" for="item-6"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user8} /></td>
                                                        <td className="text-nowrap align-middle">Clifford Benjamin</td>
                                                        <td className="text-nowrap align-middle"><span>25 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-7" type="checkbox" /> <label className="custom-control-label" for="item-7"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user12} /></td>
                                                        <td className="text-nowrap align-middle">Thedric Romans</td>
                                                        <td className="text-nowrap align-middle"><span>12 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-8" type="checkbox" /> <label className="custom-control-label" for="item-8"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user1} /></td>
                                                        <td className="text-nowrap align-middle">Haily Carthew</td>
                                                        <td className="text-nowrap align-middle"><span>27 Jan 2018</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-9" type="checkbox" /> <label className="custom-control-label" for="item-9"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user12} /></td>
                                                        <td className="text-nowrap align-middle">Dorothea Joicey</td>
                                                        <td className="text-nowrap align-middle"><span>12 Dec 2017</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-10" type="checkbox" /> <label className="custom-control-label" for="item-10"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user15} /></td>
                                                        <td className="text-nowrap align-middle">Mikaela Pinel</td>
                                                        <td className="text-nowrap align-middle"><span>10 Dec 2017</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-11" type="checkbox" /> <label className="custom-control-label" for="item-11"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user12} /></td>
                                                        <td className="text-nowrap align-middle">Donnell Farries</td>
                                                        <td className="text-nowrap align-middle"><span>03 Dec 2017</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input className="custom-control-input" id="item-12" type="checkbox" /> <label className="custom-control-label" for="item-12"></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center"><img alt="userImg" className="avatar avatar-md br-7" src={user4} /></td>
                                                        <td className="text-nowrap align-middle">Letizia Puncher</td>
                                                        <td className="text-nowrap align-middle"><span>09 Dec 2017</span></td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <button className="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button className="btn btn-sm btn-primary badge" type="button"><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <ul className="pagination float-end">
                                        <li className="page-item page-prev disabled page-link">
                                            Prev
                                        </li>
                                        <li className="page-item active page-link">1</li>
                                        <li className="page-item page-link">2</li>
                                        <li className="page-item page-link">3</li>
                                        <li className="page-item page-link">4</li>
                                        <li className="page-item page-link">5</li>
                                        <li className="page-item page-next page-link">
                                            Next
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>



    )
}

export default User
