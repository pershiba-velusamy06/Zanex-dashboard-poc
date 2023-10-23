import React from 'react'

const Batches = ({name,count,icon,color}) => {
    return (
        <>
            <div className="media">
                <div className={`media-icon ${color}  me-3 mt-1`}>
                    <i className={`${icon} fs-20 text-white`}></i>
                </div>
                <div className="media-body">
                    <span className="text-muted">{name}</span>
                    <div className="fw-semibold fs-25">
                    {count}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Batches
