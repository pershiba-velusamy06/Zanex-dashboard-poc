import React, { useEffect, useState } from 'react'
import './user.scss'
//import UserTableBody from './UserTable/UserTableBody'
import UserTableBody from './UserTable/UserTableBody'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
const User = () => {
    const [UserList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios.get('https://dummyjson.com/users').then((response) => {
            setUserList(response.data.users)
            setLoading(false)
        })

    }, [])
    const tableHeader = ['S.no', 'Name', "Date", 'BloodGroup', 'Age', 'Action']
    return (
        <>
            {loading ? <Loader /> : <>
                <div className="main-content app-content mt-0">
                    <div className="side-app">
                        <div className="main-container container-fluid">

                            <div className="row mt-5 row-wrapper">
                                <div className="col-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title mb-0">Users</h3>
                                        </div>
                                        <div className='table-margin'>
                                            <input className='input-search' placeholder='Search...'></input>
                                            {/* <UserTableBody data={UserList} tableHeader={tableHeader} /> */}
                                            <UserTableBody data={UserList} tableHeader={tableHeader} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
            }
        </>

    )
}

export default User
