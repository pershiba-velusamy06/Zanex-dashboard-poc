import React from 'react'
import UserTableRow from './UserTableRow'

const TableIndex = ({ tableHeader, data }) => {
  return (
    <>
      <div className="card-body">
        <div className="table-responsive">
          <table  id="data-table" className="table table-bordered text-nowrap mb-0">
            <thead className="border-top">
              <tr>
                {tableHeader.map((header) => (<th className="bg-transparent border-bottom-0">{header}</th>)

                )}

              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                return <UserTableRow user={user} />
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TableIndex
