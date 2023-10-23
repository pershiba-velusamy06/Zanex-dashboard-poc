import React from 'react'

const ProfileTab = ({selectedTab,setSelectedTab}) => {
    return (
        <>
            <div className="border-top">
                <div className="wideget-user-tab">
                    <div className="tab-menu-heading">
                        <div className="tabs-menu1">
                            <ul className="nav">
                                <li onClick={()=>setSelectedTab('Profile')}><a href="#Profile" className={selectedTab==="Profile"?"active show":""} data-bs-toggle="tab" >Profile</a></li>
                                <li onClick={()=>setSelectedTab('Friends')}><a href="#Friends" data-bs-toggle="tab" className={selectedTab==="Friends"?"active show":""}>Friends</a></li>
                                <li onClick={()=>setSelectedTab('Gallery')}><a href="#Gallery" data-bs-toggle="tab" className={selectedTab==="Gallery"?"active show":""}>Gallery</a></li>
                                <li onClick={()=>setSelectedTab('Followers')}><a href="#Followers" data-bs-toggle="tab" className={selectedTab==="Followers"?"active show":""}>Followers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileTab
