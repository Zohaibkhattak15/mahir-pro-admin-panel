import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import './Category.css';


const Category = () => {

    const [active, setactive] = useState();
    

    
    return (
        <div className="wrapper">
        {/* Navbar */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Category</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className={ active === 'Home'? "breadcrumb-item menuecolor" : "breadcrumb-item"}  onClick={() => setactive('Home')} ><Link to='/Dashboard'>Home</Link></li>
                    <li className={ active === 'Category' ?  "breadcrumb-item menuecolor" : "breadcrumb-item"} onClick={() => setactive('Category')} ><Link to='/Category'>Category </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='addCategory'><button type="button" style={{width:'200px' }} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Category  </button></Link> 
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
                                        <h3 class="card-title" >Results for "All Category"</h3>
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
                                                        <div className='col-3 '>
                                                                <div className='row'>
                                                                    <div className='col-3'>
                                                                        <p >Search :</p>
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
                                    <table id="mytable" class="table table-bordered table-hover">
                                        <thead>
                                            <tr style={{ color : 'gray' }}>
                                                <th><input type='checkbox'></input> </th>
                                                <th>Title</th>
                                                <th>Approved Maahir</th>
                                                <th>Pending Maahir</th>
                                                <th>Description</th>
                                                <th>Web Icon</th>
                                                <th>Mobile Icon</th>
                                                <th>Actions</th>
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
    )
}


export default Category;
