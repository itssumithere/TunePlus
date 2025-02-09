import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
import * as XLSX from 'xlsx';
import { Box, Button, Modal, Typography } from '@mui/material';
import DataTable from '../Common/DataTable/DataTable';
import Swal from 'sweetalert2';
export const AllDraft = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, deleteAction, isLoading, myReleaseDraft, setMyTracks } = OneReleaseController();
  console.log(myReleaseDraft)
  return (
    <div>
      <SideBar />
      <div className="main-cotent">
        <Nav />
        <div className="content-main">
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Draft Releasess</h3>
                  </div>
                  <div className="box-body">
                    {/* <DataTable
                      columns={columns}
                      rows={myReleaseDraft}
                      height="500"
                      width="100%"
                    /> */}
                    {/* 
                <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                  <thead>
                    <tr role="row">
                      <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TITILE</th>
                      <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TYPE</th>
                      <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">ACTION</th>
                    </tr>
                  </thead>
                  <tbody role="alert" aria-live="polite" aria-relevant="all">
                    {myRelease.map((item) => (
                    item.status == "Pending" &&
                    <tr className="odd">
                      <td className="  sorting_1">{item.title}</td>
                      <td className="  ">{item.type}</td>
                      <td className=" "><a onClick={() => { moreAction(item) }}>MORE</a></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                */}
                    <div className="box-body table-responsive">
                      <table id="example2" className="table table-bordered table-striped">
                        <thead>
                          <tr role="row">
                            <th >Title / Artist</th>
                            <th >Type</th>
                            <th >Status</th>
                            <th >Label</th>
                            <th>Image</th>
                            <th >Release date / Hour / Time zone</th>
                            <th ># of track</th>
                            <th >UPC / Catalog Number</th>
                            {/* <th >Delivered Territories & Stores</th> */}
                            <th >ACTION</th>
                          </tr>
                        </thead>
                        <tbody role="alert" aria-live="polite" aria-relevant="all">
                          {myReleaseDraft?.map((item) => (

                            <tr className="odd">
                              <td className="  sorting_1">
                                <a onClick={() => {
                                  navigate("/release-details", { state: { releaseId: item._id } });
                                }}>
                                  <div>
                                    <span style={{ color: '#0080ff' }}>{item?.title}</span>
                                  </div>
                                </a>
                                {item?.step1?.primaryArtist[0]?.name}
                              </td>
                              <td className="  ">{item?.type}</td>
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
                              <td className="  ">{item?.step1?.labelName}</td>
                              <td  ><a href={item?.step1?.coverImage} target={'_top'}><img src={item?.step1?.coverImage} height={50} width={50} /></a> 
                              </td>
                              <td className="  ">{item.step1?.originalReleaseDate}</td>
                              <td className="  ">{Array.isArray(item?.step3) ? item.step3.length : 0}</td>
                              <td className="  ">{item.step1?.UPCEAN}</td>
                              {/* <td className="  ">{item?.step5?.MainReleaseDate}</td> */}

                              <td>
                                <div className="action-buttons d-flex">
                                  <button title="Download" className="action-button">
                                    <a onClick={() => moreAction(item)}>
                                      <i className="fa fa-pencil"></i>
                                    </a>
                                  </button>
                                  <button title='Download' className='action-button'>
                                    <a onClick={async () => {
                                      Swal.fire({
                                        title: "Are you sure?",
                                        text: `You want to delete ${item.title} `,
                                        icon: "warning", // Options: 'warning', 'error', 'success', 'info', 'question'
                                        showCancelButton: true, // Enables the Cancel button
                                        confirmButtonText: "Yes, proceed",
                                        cancelButtonText: "No, cancel",
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          // User clicked the confirm button
                                          deleteAction(item)
                                        } else if (result.isDismissed) {
                                          // User clicked the cancel button
                                          Swal.fire("Cancelled", "Action was cancelled.", "info");
                                        }
                                      });
                                    }
                                    }>
                                      <i className='fa fa-trash'></i>
                                    </a>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {isLoading && "Loading..."}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};