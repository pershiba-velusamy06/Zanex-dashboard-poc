import { Col, Row } from 'react-bootstrap';
import TableIndex from './TableIndex'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone
} from 'react-bootstrap-table2-paginator';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { useEffect } from 'react';
const UserTableBody = ({ data }) => {
  const navigate = useNavigate();
  const nameFormatter = (data, row) => {
    return (
      <div className="text-muted fs-15 fw-semibold text-center">{data}</div>
    );
  };

  const buttonFormatter = (data, row) => {
    return (
      <>
        <a className="btn btn-primary btn-sm rounded-11 me-2" href='/' data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
        <a className="btn btn-danger btn-sm rounded-11" href='/' data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>

      </>

    );
  };

  const imageNamenameFormatter = (data, user) => {
    console.log(user)
    return (
      <div className="d-flex">
        <span className="avatar avatar-md brround mt-1" onClick={() => navigate(`/users/profile?userId=${user.id}#Profile`)} style={{ backgroundImage: `url(${user.image})` }}></span>
        <div className="ms-2 mt-0 mt-sm-2 d-block">
          <h6 className="mb-0 fs-14 fw-semibold">{`${user.firstName} ${user.lastName}`}</h6>
          <span className="fs-12 text-muted">{user.email}</span>
        </div>
      </div>
    )
  }



  const tableHeader = ['S.no', 'Name', "Date", 'BloodGroup', 'Age', 'Action']

  const columns = [
    {
      dataField: "id",
      text: "S.no",
      sort: true,
      formatter: nameFormatter,
    },
    {
      dataField: "firstName",
      text: "Name",
      sort: true,
      formatter: imageNamenameFormatter,
    },
    {
      dataField: "birthDate",
      text: "Date",
      sort: true,
    },
    {
      dataField: "bloodGroup",
      text: "BloodGroup",
      sort: true,

    },
    {
      dataField: "id",
      text: "Actions",
      sort: false,
      formatter: buttonFormatter
    }
  ];


 






  const renderPageList = (options) => (
    <Col className="react-bootstrap-table-pagination-list" md={6}>
      <ul className="pagination react-bootstrap-table-page-btns-ul float-end">
        {options.pages.map((page) => (
          <li
            key={page.page}
            className={`${page.active ? "active " : ""}page-item`}
            onClick={() => options.onPageChange(page.page)}
          >
            <a href="#" className="page-link">
              {page.page}
            </a>
          </li>
        ))}
      </ul>
    </Col>
  );

  const renderPaginationTotal = (start, to, total) => {
    <>
    <span>
      {start} to {to} of {total}
    </span>
  </>



  }



  const renderDropDown = ({ options, currSizePerPage, onSizePerPageChange }) => {
    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        color: "#0d6efd"
      }),
      control: (provided, state) => ({
        ...provided,
        backgroundColor: "#0d6efd",
        color: "white"
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: "white"
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "white",
        "&:hover": {
          color: "#bbbbbb"
        }
      }),
      indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: "white"
      })
    };
    return (
      <Row>
        <Col md={4}>
          <Select
            defaultValue={{ label: 5, value: 5 }}
            isSearchable={false}
            styles={customStyles}
            onChange={(selected) => {
              onSizePerPageChange(selected.value);
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: "5px",
              backgroundColor: "#0d6efd"
            })}
            options={[
              { label: 5, value: 5 },
              { label: 10, value: 10 },
              { label: 15, value: 15 },
              { label: "All", value: this.props.products.length }
            ]}
          />
        </Col>
        <Col
          md={8}
          ref={this.portal}
          className="justify-content-center align-self-center"
        ></Col>
      </Row>
    );
  };




  const pagination = paginationFactory({
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "Previous",
    prePageText: "",
    nextPageText: "",
    lastPageText: "Next",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: data.length,
      },
    ],
    alwaysShowAllBtns: true,
   
    // pageListRenderer: renderPageList,
    // paginationTotalRenderer: renderPaginationTotal,
    // sizePerPageRenderer: renderDropDown
  });









  return (
    <>
      {/* <TableIndex tableHeader={tableHeader} data={data} /> */}



  
        
          


         
              <BootstrapTable keyField="id" data={data} columns={columns} bordered={true}
                pagination={pagination} />
             
       
   

    </>
  )




}

export default UserTableBody

