import React from 'react'

const Pagination = () => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">

                        <span class="page-link" >Previous</span>

                    </li>
                    <li class="page-item"><span class="page-link">1</span></li>
                    <li class="page-item"><span class="page-link" >2</span></li>
                    <li class="page-item"><span class="page-link">3</span></li>
                    <li class="page-item">
                        <span class="page-link">
                            Next

                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination
