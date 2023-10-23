import React from 'react'
import moment from 'moment'
const ProfileLeftDetails = ({userData}) => {
  return (
    <>
       <div className="col-lg-12 col-md-12 col-xl-6">
                            <div className="wideget-user-desc d-sm-flex">
                                <div className="wideget-user-img">
                                    <img className="profile-image-custom" src={userData.image} alt="img" />
                                </div>
                                <div className="user-wrap">
                                    <h4>{`${userData?.firstName} ${userData?.lastName}`}</h4>
                                    <h6 className="text-muted mb-3">{`Member Since: ${moment(userData.birthDate).format("MMMM YYYY")}`}</h6>
                                    <span className='d-flex'>
                                    <a href="/" className="btn btn-primary m-2"><i className="fa fa-rss"></i> Follow</a>
                                    <a href="/" className="btn btn-secondary m-2"><i className="fa fa-envelope"></i> E-mail</a>

                                    </span>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default ProfileLeftDetails
