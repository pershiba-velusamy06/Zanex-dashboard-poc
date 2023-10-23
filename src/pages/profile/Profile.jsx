import React from 'react'
import ProfileHeader from './profileSubComponents/ProfileHeader'
import ProfileDetailsTop from './profileSubComponents/ProfileDetails/ProfileDetailsTop'
import ProfileTab from './profileSubComponents/ProfileTab'
import ProfileTabIndex from './profileSubComponents/ProfileTab/ProfileTabIndex'

const Profile = ({selectedTab,setSelectedTab,userData}) => {
  return (
    <>
        <div className="main-content app-content mt-0">
                <div className="side-app">

                    <div className="main-container container-fluid">
                        <ProfileHeader />
                        <div className="row" id="user-profile">
                            <div className="col-lg-12">
                                <div className="card">
                                    <ProfileDetailsTop userData={userData} />
                                    <ProfileTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                                </div>
                                <ProfileTabIndex selectedTab={selectedTab} setSelectedTab={setSelectedTab} userData={userData}/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Profile
