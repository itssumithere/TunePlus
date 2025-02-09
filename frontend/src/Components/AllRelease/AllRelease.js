import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
import * as XLSX from 'xlsx';
import DataTable from '../Common/DataTable/DataTable';
import { Box, Button, Modal, Typography } from '@mui/material';
import { postData } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';
import Swal from 'sweetalert2';
export const AllRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, deleteAction, isLoading, myTracks, setMyTracks, exportTableToExcel, } = OneReleaseController();

  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header' },
    { field: '_id', headerName: 'Id', headerClassName: 'black-header' },
    { field: 'type', headerName: 'Type', headerClassName: 'black-header' },
    { field: 'status', headerName: 'Status', headerClassName: 'black-header' },
    { field: 'title', headerName: 'Title / Artist', headerClassName: 'black-header' },
    { field: 'label', headerName: 'Label', headerClassName: 'black-header' },
    { field: 'releaseDate', headerName: 'Release date / Hour / Time zone', headerClassName: 'black-header', width: 150 },
    { field: 'noOfTrack', headerName: '# of track', headerClassName: 'black-header' },
    { field: 'upcCatalogNumber', headerName: 'UPC / Catalog Number', headerClassName: 'black-header', width: 150 },
    { field: 'deliveredTerritories', headerName: 'Delivered Territories & Stores  ', headerClassName: 'black-header' },
    {
      field: 'action', headerName: 'Action',
      renderCell: (params) => (
        <div style={{ gap: '8px' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
             navigate("/release-details", { state: { releaseId: params.row._id } });
            }}
          >
            More
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              exportTableToExcel('example2', 'AutomaticReport.xlsx')

            }}
          >
            Download
          </Button>
        </div>
      )
    }
  ];
  { console.log("item----------------", myRelease) }


  return (
    <div>
      <SideBar />
      <div className="main-cotent">
        <Nav />
        <div className="content-main">
          <section className="content">
            <div className="page-heading">
              <h1>All Release</h1>
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <div className="box">
                  <div className="box-body"> */}
            {/* <DataTable
                      columns={columns}
                      rows={myRelease}
                      height="500"
                      width="100%"
                    /> */}

            <div className="box-body table-responsive">
              <table id="example2" className="table table-bordered table-striped">
                <thead>
                  <tr role="row">
                    <th >Title / Artist</th>
                    <th >Type</th>
                    <th >Status</th>
                    <th >Image</th>
                    <th >Label</th>
                    {/* <th >Release date / Hour / Time zone</th> */}
                    <th ># of track</th>
                    <th >UPC / Catalog Number</th>
                    <th >Client Number</th>
                    {/* <th >ACTION</th> */}
                  </tr>
                </thead>
                <tbody role="alert" aria-live="polite" aria-relevant="all">
                  {myRelease.map((item) => (

                    <tr className="odd">
                      <td className="  sorting_1">
                        <a onClick={() => {
                          navigate("/release-details", { state: { releaseId: item._id } });
                        }}>
                          <div>
                            <span style={{ color: '#0080ff' }}>{item.title}</span>
                          </div>
                        </a>
                        {item.step1.primaryArtist[0].name}
                      </td>
                      <td className="  ">{item.type}</td>
                      <td  >
                        {item.status === 'Pending' && (
                          <img className="img-fluid" src={require('../../assets/images/pending.png')} style={{ height: 40, width: 40 }} />

                        )}

                        {item.status === 'Submit' && (
                          <img className="img-fluid" src={require('../../assets/images/submit.png')} style={{ height: 40, width: 40 }} />

                        )}

                        {item.status === 'Approve' && (
                          <img className="img-fluid" src={require('../../assets/images/approve.png')} style={{ height: 40, width: 40 }} />

                        )}

                        {item.status === 'Reject' && (
                          <img className="img-fluid" src={require('../../assets/images/reject.png')} style={{ height: 40, width: 40 }} />

                        )}
                      </td>
                      <td  ><a href={item?.step1?.coverImage} target={'_blank'}><img src={item?.step1?.coverImage} height={50} width={50} /></a> 

                      </td>
                      <td className="  ">{item?.step1?.labelName}</td>
                      {/* <td className="  ">{item.step1?.originalReleaseDate}</td> */}
                      <td className="  ">{Array.isArray(item?.step3) ? item.step3.length : 0}</td>
                      <td className="  ">{item.step1?.UPCEAN}</td>
                      <td className="  ">{item.clientNumber}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* </div> */}
            {isLoading && "Loading..."}
            {/* </div>
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};