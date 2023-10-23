import React from 'react'

const ProfileHeader = () => {
  return (
    <>
      <div className="page-header">
                                <div>
                                    <h1 className="page-title">Profile</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Users</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
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
    </>
  )
}

export default ProfileHeader
