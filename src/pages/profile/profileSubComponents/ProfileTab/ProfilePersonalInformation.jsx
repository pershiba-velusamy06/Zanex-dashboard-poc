import React from 'react'

const ProfilePersonalInformation = ({selectedTab,userData}) => {
    console.log(userData,"userData")
  return (
    <>
         <div className={selectedTab==="Profile"?"tab-pane   active show":"tab-pane" }id="Profile">
                    <div id="profile-log-switch">
                        <div className="card">
                            <div className="card-body">
                                <div className="media-heading">
                                    <h5><strong>Personal Information</strong></h5>
                                </div>
                                <div className="table-responsive ">
                                    <table className="table row table-borderless">
                                        <tbody className="col-lg-12 col-xl-6 p-0">
                                            <tr>
                                                <td><strong>Full Name :</strong>{`${userData.firstName} ${userData.lastName}`}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Location :</strong>{`${userData.address.city}, ${userData.address.state}`}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Department :</strong>{userData?.company?.department}</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="col-lg-12 col-xl-6 p-0">
                                            <tr>
                                                <td><strong>Website :</strong>{userData.domain}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Email :</strong>{userData.email}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Phone :</strong> {userData.phone} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row profie-img">
                                    <div className="col-md-12">
                                        <div className="media-heading">
                                            <h5><strong>Biography</strong></h5>
                                        </div>
                                        <p>
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus
                                        because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences that are extremely painful. Nor
                                            again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
                                            pleasure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ProfilePersonalInformation
