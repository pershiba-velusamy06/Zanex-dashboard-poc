import React from 'react'
import { Followers } from './ProfileConstants'
const ProfileFollowers = ({ selectedTab, setSelectedTab }) => {
    return (

        <div className={selectedTab === "Followers" ? "tab-pane active show" : "tab-pane"} id="Followers">
            <div className="row  mb-5">
                {Followers.map((follower) => {
                    return (<>
                        <div className=" col-lg-6 col-md-12">
                            <div className="card border p-0 over-flow-hidden">
                                <div className="media card-body media-xs overflow-visible ">
                                  {follower.image!==""?  <img className="avatar brround avatar-md me-3" src={follower.image} alt="avatar-img" />:
                                    <span className="avatar cover-image avatar-md brround bg-pink me-3">{follower?.Name?.slice(0,2)}</span>}

                                    <div className="media-body valign-middle">
                                        <a href="/" className=" fw-semibold text-dark">{follower.Name}</a>
                                        <p className="text-muted mb-0">johan@gmail.com</p>
                                    </div>
                                    <div className="media-body valign-middle text-end overflow-visible mt-2">
                                        <button className="btn btn-primary" type="button">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                })}




            </div>
        </div>
    )
}

export default ProfileFollowers
