import React from 'react';
import { Link } from 'react-router-dom';
export default function addCategory() {
    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Category</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/Category'>Category  </Link></li>
                  <li className="breadcrumb-item active"><Link to='/addCategory'>Add Category</Link></li>
                </ol>
              </div>

              <div className='col-12'>
                <hr></hr>
              </div>

              <div className='col-3'>
              
              </div>
              <div className='col-7'>
                  <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title :</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description :</label>
                        <div className="col-sm-10">
                          <textarea type="text" className="form-control" id="inputEmail3" placeholder="" />
                        </div>
                      </div>
                    
                  </div>
                </form>
              </div>

              
                  <div className='col-12'> 
                      <hr></hr>
                  </div>

                  {/* /.card-body */}
                  <div className='container'>
                    <div className='row'>
                        <div className='col-3'> </div>
                        <div className='col-7'>
                          <div className='row '>
                                <div className='col-3'>
                                </div>
                                <div className='col-4'>
                                  <button type="submit" style={{width:'150px'}} className="btn btn-info"><i class="fas fa-check"></i> Submit</button>
                                </div>
                                <div className='col-2'> 
                                  <button type="submit" style={{width:'150px'}} className="btn btn-default float-right"><i class="fas fa-redo"></i> Reset</button>
                                </div>
                          </div>
                        </div>
                      <div className='col-3'></div>
                  </div>    
                </div> 
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
              
      </div>
    </div>
    )
}
