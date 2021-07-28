import React from 'react';
import {Card} from 'react-bootstrap'

export default function Coustomers() {
    return (
        <>
            <div className='content-wrapper'>
                <section className='content-header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 ml-3'>
                                <h1 style={{Color: '#26415e'}} >Customers</h1>
                            </div>
                            <div className='col-12'>
                                <hr></hr>
                            </div>
                        </div>
                    </div> 
                </section>

                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <Card style={{padding : '0'}}   >
                                    <div className='card-header' style={{backgroundColor: '#26415e' , color : 'white'}}>
                                        <h3 class="card-title" >Results for Customers</h3>
                                    </div>
                                    <div className='col-12'>
                                        <div className='row px-3'>
                                                <div className='col-12 mt-4'>
                                                    <div className='row'>
                                                        <div className='mr-2'>    
                                                            <p style={{fontSize:'16px'}}>Display</p>
                                                        </div>
                                                        <div>
                                                            <select  type='text' style={{width:'60px', height : '25px'}}>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <p className='ml-2' style={{fontSize:'16px'}}>records</p>
                                                        </div>
                                                        <div className='offset-md-7'>

                                                        </div>
                                                        <div className='col-3'>
                                                                <div className='row'>
                                                                    <div className='col-3'>
                                                                        <p>Search :</p>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <input type='text' ></input>
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
                                                <th>Avatar</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Group</th>
                                                <th>Refferal</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                <th>UserType</th>
                                                <th>Added On</th>
                                                <th>Status</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        
                                        
                                        </table>
                                    </div>
                                </Card>


                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        </>
    )
}
