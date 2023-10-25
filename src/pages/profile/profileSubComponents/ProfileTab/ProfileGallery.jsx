import React from 'react'
import { galleryImages } from './ProfileConstants'
import { LightGallery } from '../../../../components/ReactLightGallery/LightGallery'
const ProfileGallery = ({ selectedTab, setSelectedTab }) => {

    return (
        <>
            <div className={selectedTab === "Gallery" ? "tab-pane   active show" : "tab-pane"} id="Gallery">


                {/* <GalleryPreviewIndex galleryImages={galleryImages} /> */}
                <LightGallery galleryImages={galleryImages} />




            </div>

        </>


    )
}

export default ProfileGallery
