import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

export default function Appointment() {
    return (
        <>
            <div className="wrapper">
        {/* Navbar */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Appointment</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"   ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Appointment'>Appointment </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddAppointment'><button type="button" style={{width:'250px' }} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Appointment  </button></Link> 
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12'>

                </div>
                
                
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                    <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-10'>

                                                </div>
                                                <div className='row' >
                                                    <div className='col-12 d-flex justify-content-end mb-3' id='icon-bar-sec' >
                                                        <div className='iconbar' style={{padding : "8px 15px " , border : '1px solid lightblue' , color : 'blue'}}>
                                                            <i class="fas fa-search"></i>
                                                        </div>
                                                        <div className='iconbar' style={{padding : "8px 15px " , border : '1px solid lightblue' , color : 'purple'}}>
                                                            <i class="far fa-file"></i>
                                                        </div>
                                                        <div className='iconbar' style={{padding : "8px 15px " , border : '1px solid lightblue' , color : 'orange'}}>    
                                                            <i class="fas fa-database"></i>
                                                        </div>
                                                        <div className='iconbar' style={{padding : "8px 15px " , border : '1px solid lightblue' , color : 'gray'}}>
                                                            <i class="fas fa-print"></i>
                                                        </div>    

                                                    </div>
                                                </div>

                                            </div>
                                    </div>
                                <Card style={{padding : '0'}}>
                                    <div className='card-header' style={{backgroundColor: '#26415e' , color : 'white'}}>
                                        <h3 class="card-title" >All Appointments</h3>
                                    </div>
                                    <div className='col-12'>
                                        <div className='row px-3'>
                                                <div className='col-12 mt-4'>
                                                    <div className='row'>
                                                        <div className='mr-2 mt-1'>    
                                                            <p style={{fontSize:'16px'}}>Display</p>
                                                        </div>
                                                        <div>
                                                            <select className='form-control' type='text'>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select>
                                                        </div>
                                                        <div className='mt-1'>
                                                            <p className='ml-2' style={{fontSize:'16px'}}>records</p>
                                                        </div>
                                                        <div className='offset-md-6'>

                                                        </div>
                                                        <div className='col-4 '>
                                                                <div className='row'>
                                                                    <div className='col-2 mt-1'>
                                                                        <p>Search:</p>
                                                                    </div>
                                                                    <div className='col-10'>
                                                                        <input className="form-control" type='text' ></input>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr style={{ color : 'gray' }}>
                                                <th><input type='checkbox'></input> </th>
                                                <th>Customer</th>
                                                <th>Maahir</th>
                                                <th>Category</th>
                                                <th>Address</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Date (Time)</th>
                                                <th>Date Created</th>
                                          
                                            </tr>
                                        </thead>
                                        
                                        
                                        </table>
                                    </div>
                                </Card>


                            </div>
                        </div>
                    </div>



          </section>
          {/* /.content */}
        </div>
      </div>

        </>
    )
}
