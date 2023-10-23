import React from 'react'
import { Friends } from './ProfileConstants'
import SocialMedia from '../../../../components/socialMedia/SocialMedia'
const ProfileFriends = ({ selectedTab, setSelectedTab }) => {
    return (
        <>
            <div className={selectedTab === "Friends" ? "tab-pane   active show" : "tab-pane"} id="Friends">
                <ul className="widget-users row  mb-5">
                    {Friends.map((friend) => {
                        return <>
                            <li className="col-lg-4  col-md-6 col-sm-12 col-12">
                                <div className="card border p-0">

                                    <div className="card-body text-center">
                                        <span className="avatar avatar-xxl imageROund-friend cover-image"><img className='imageROund-friend' src={friend.image}alt='Name'/></span>
                                        <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">James Thomas</h4>
                                        <span className="text-muted">Web designer</span>
                                    </div>

                                    <div className="card-footer text-center">
                                        <div className="row user-social-detail">

                                            <SocialMedia icons="bi bi-google"/>
                                            <SocialMedia icons="bi bi-facebook"/>
                                            <SocialMedia icons="bi bi-twitter" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </>

                    })
                    }

                </ul>
            </div>
        </>
    )
}

export default ProfileFriends
