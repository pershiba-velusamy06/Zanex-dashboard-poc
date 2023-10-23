import React from 'react'
import { galleryImages } from './ProfileConstants'
const ProfileGallery = ({ selectedTab, setSelectedTab }) => {

    return (
        <div className={selectedTab === "Gallery" ? "tab-pane   active show" : "tab-pane"} id="Gallery">
            <div className="row  mb-5 img-gallery" id="lightgallery">
                {galleryImages.map((galImage) => {
                    return (<>
                        <div className="col-lg-3 col-md-6" data-responsive={galImage} data-src={galImage}>
                            <img className="img-fluid mb-2 br-7" src={galImage} alt="banner" />
                        </div>
                    </>)
                })
                }


            </div>
        </div>
    )
}

export default ProfileGallery
