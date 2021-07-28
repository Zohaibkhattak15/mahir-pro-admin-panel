import React from 'react';
import Login from './Views/Login/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Containers/Layout';
import ProtectedRoutes from './ProtectedRoutes';


export default function App() {
  
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
  // Containers
  return (
    <>
      <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route  exact  path="/" component={Login} />  
          <ProtectedRoutes  path="/Dashboard" name="Home" component={Layout} />
          <ProtectedRoutes  path='/Appointment' name="Appointment"  component={Layout}  />
          <ProtectedRoutes  path='/Appversion' name="Appversion" component={Layout}  />
          <ProtectedRoutes  path='/Category'  name='Category' component={Layout}  />
          <ProtectedRoutes  path='/Smsnotify'  name='Smsnotify' component={Layout}  />
          <ProtectedRoutes  path='/Coustomers' name='Coustomers' component={Layout} />
          <ProtectedRoutes  path='/ServiceProviders' name='ServiceProviders' component={Layout} />
          <ProtectedRoutes  path='/addCategory' name='addCategory' component={Layout} />
          <ProtectedRoutes  path='/AddAppointment' name='AddAppointment' component={Layout} />

        </Switch>
        </React.Suspense>  
      </BrowserRouter>    
    </>
  )
}
