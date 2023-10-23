import React from 'react'
import Batches from '../../../../components/Batches/Batches'

const ProfileRightDetails = ({ userData }) => {

    return (
        <>
            <div className="col-lg-12 col-md-12 col-xl-6">
                <div className="text-xl-right mt-4 mt-xl-0">
                    <a href="/" className="btn btn-white m-3">Message</a>
                    <a href="/" className="btn btn-primary ">Edit Profile</a>
                </div>

                <div className="mt-5">
                    <div className="main-profile-contact-list float-lg-end d-lg-flex">
                        <div className="me-5">
                            <Batches icon='fe fe-file-plus' name='Posts' count='328' color='bg-primary' />
                        </div>
                        <div className="me-5 mt-5 mt-md-0">
                            <Batches icon='fe fe-users' name='Followers' count='937k' color='bg-success' />
                        </div>
                        <div className="me-0 mt-5 mt-md-0">
                            <Batches icon='fe fe-wifi' name='Following' count='2,876' color='bg-orange' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileRightDetails
