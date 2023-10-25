import React from "react";
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem,
 
} from "react-lightgallery";

import "./styles.css";





const PhotoItem = ({ image, thumb}) => (
  <div  className="col-lg-3 col-md-6 image-gallery">
    <LightgalleryItem  src={image} thumb={thumb} itemClassName='gallery-item'>
      <img className="br-7" src={image}  style={{ width: "100%"}} alt="img1" />
    </LightgalleryItem>
  </div>
);
PhotoItem.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
 
};






export const LightGallery = ({galleryImages}) => {

  return (
    <div className="content">
      

      <div>
     
          <LightgalleryProvider
            onBeforeOpen={() => console.info("onBeforeOpen")}
            onAfterOpen={() => console.info("onAfterOpen")}
            onSlideItemLoad={() => console.info("onSlideItemLoad")}
            onBeforeSlide={() => console.info("onBeforeSlide")}
            onAfterSlide={() => console.info("onAfterSlide")}
            onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
            onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
            onDragstart={() => console.info("onDragstart")}
            onDragmove={() => console.info("onDragmove")}
            onDragend={() => console.info("onDragend")}
            onSlideClick={() => console.info("onSlideClick")}
            onBeforeClose={() => console.info("onBeforeClose")}
            onCloseAfter={() => console.info("onCloseAfter")}
          >

            <div
            className="row  mb-5" 
              style={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center"
              }}
            >
              {galleryImages.map((p, idx) => (
               <div key={idx}  className="col-lg-3 col-md-6 image-gallery">
               <LightgalleryItem  group={'galleryImages'} src={p} thumb={p} itemClassName='gallery-item'>
                 <img className="br-7" src={p}  style={{ width: "100%"}} alt="img1" />
               </LightgalleryItem>
             </div>
              ))}
            </div>
         
          
          </LightgalleryProvider>
       
      </div>
    </div>
  );
}







