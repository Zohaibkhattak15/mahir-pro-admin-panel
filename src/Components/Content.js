import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appointment from '../Dashboard/MasterData/Appointment/Appointment';
import Appversion from '../Dashboard/MasterData/Appversion';
import Category from '../Dashboard/MasterData/Category/Category';
import Smsnotify from '../Dashboard/MasterData/Smsnotify';
import Coustomers from '../Dashboard/Service Management/Coustomers';
import ServiceProviders from '../Dashboard/Service Management/ServiceProviders';
import addCategory from '../Dashboard/MasterData/Category/addCategory';
import AddAppointment from '../Dashboard/MasterData/Appointment/AddAppointment';

export default function Content() {
    return (
        <>
            
                <Switch>
                    <Route path='/Appointment' component={Appointment} />
                    <Route path='/Appversion' component={Appversion} />
                    <Route path='/Category' component={Category} />
                    <Route path='/Smsnotify' component={Smsnotify} />
                    <Route path='/Coustomers' component={Coustomers} />
                    <Route path='/ServiceProviders' component={ServiceProviders} />
                    <Route path='/addcategory'     component={addCategory} />
                    <Route path='/AddAppointment'     component={AddAppointment} />
                </Switch>
            
        </>
    )
}
