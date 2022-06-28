import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admins from '../Admins/index';
import SuperAdmins from '../SuperAdmins';
import Employees from '../Employees/index';
import Projects from '../Projects';
import TimeSheets from '../TimeSheets/index';
import Tasks from '../Tasks/index';
import Home from '../Home';
<<<<<<< Updated upstream
import Login from '../LogIn';
=======
import Login from '../Auth/Login';
>>>>>>> Stashed changes

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/super-admins" exact component={SuperAdmins} />
      <Route path="/admins" exact component={Admins} />
      <Route path="/employees" exact component={Employees} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/time-sheets" exact component={TimeSheets} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Routes;
