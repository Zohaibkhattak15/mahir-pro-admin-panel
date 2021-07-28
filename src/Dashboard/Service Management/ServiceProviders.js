import React from 'react';

export default function ServiceProviders() {
    return (
        <>
            <div className='content-wrapper'>
                <section className='content-header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 ml-3'>
                                <h1 style={{Color: '#26415e'}} >Service Providers</h1>
                            </div>
                            <div className='col-12'>
                                <hr></hr>
                            </div>

                            <div className='col-12'>
                                <div className='px-4 py-2'>
                                    <div>
                                    <p>Category</p>
                                    </div>
                                    <div className='row'>
                                        <div>
                                            <select type='text' style={{width:'300px' , height : '40px' , paddingLeft : '10px'}}>
                                                <option  value="Slect Option">Select Option</option>
                                            </select>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" style={{width:'150px' , padding : '7px 0 '}} class="btn btn-primary">Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </section>

                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card' style={{padding : '0'}}>
                                    <div className='card-header' style={{backgroundColor: '#26415e' , color : 'white'}}>
                                        <h3 class="card-title" >Results for Service Providers</h3>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
