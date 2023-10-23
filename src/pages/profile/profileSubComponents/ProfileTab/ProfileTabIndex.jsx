import React from 'react'
import ProfilePersonalInformation from './ProfilePersonalInformation'
import ProfileFriends from './ProfileFriends'
import ProfileGallery from './ProfileGallery'
import ProfileFollowers from './ProfileFollowers'

const ProfileTabIndex = ({selectedTab,setSelectedTab ,userData}) => {
 
    return (
        <>
            <div className="tab-content">
                <ProfilePersonalInformation selectedTab={selectedTab}  userData={userData}/>
                <ProfileFriends selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                <ProfileGallery selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <ProfileFollowers selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

            </div>
        </>
    )
}

export default ProfileTabIndex
