import React,{useEffect, useState} from 'react';
import './login.css';
import { Link , useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    let logincredentials ={
        admin : 'admin',
        password : 'admin'
    }
    const history = useHistory();

    const hanedleLogin = () => {

        if (!email) {
            alert('Please fill email');
            return;
          }

        if (!pass) {
            alert('Please fill Password');
            return;
          }

        if(email === logincredentials.admin && pass === logincredentials.password) {
            // window.location = '/';
            history.replace('/Dashboard');
            localStorage.setItem('isAuthenticated' , JSON.stringify(email));
        }
    }

    useEffect(() => {
        history.goBack(null);
    }, [history])


    

    return (
        <>
            <div className='Login-Page'>
            <div className="login-box">
                <div className="login-logo" >
                    <Link to='/'><b>MaahirPro</b>Admin Panel</Link>
                </div>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form className='card'>
                    <div className="input-group mb-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email"  
                    onChange={(e) =>setemail(e.target.value) } 
                    value={email}    
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    onChange={(e) =>setpass(e.target.value) } 
                    value={pass}    
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                 
                   <div className="col-4 pt-3">
                        <input type="submit" value='Login' className="btn btn-primary btn-block" onClick={hanedleLogin} />
                    </div>
                    {/* /.col */}
                    </div>
                </form>
               
                    {/* /.social-auth-links */}
                    <p className="mb-1 pt-3">
                        <Link >I forgot my password</Link>
                    </p>
                    <p className="mb-0">
                        <Link  className="text-center">Register a new membership</Link>
                    </p>
                </div>
                {/* /.login-card-body */}
                </div>
            </div>
        </div>    
 
        </>
    )
}
