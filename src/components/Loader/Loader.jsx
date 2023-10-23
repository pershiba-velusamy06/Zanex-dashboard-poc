import React from 'react'
import loader from '../../assests/images/loader.svg'
const Loader = () => {
  return (
    <>
           <div id="global-loader">
            <img src={loader} className="loader-img" alt="Loader"/>
        </div>
    </>
  )
}

export default Loader
