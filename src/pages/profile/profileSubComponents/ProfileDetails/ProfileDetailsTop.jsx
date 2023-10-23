
import React from 'react'
import ProfileLeftDetails from './ProfileLeftDetails'
import ProfileRightDetails from './ProfileRightDetails'

const ProfileDetailsTop = ({ userData }) => {
    console.log(userData, "userData")
    return (
        <>
            <div className="card-body">
                <div className="wideget-user">
                    <div className="row">
                        <ProfileLeftDetails userData={userData} />
                        <ProfileRightDetails userData={userData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetailsTop
