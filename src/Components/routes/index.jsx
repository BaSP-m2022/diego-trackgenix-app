import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admins from '../admins/index';
import SuperAdmins from '../superAdmins';
import Employees from '../employees/index';
import Projects from '../projects';
import TimeSheets from '../timeSheets/index';
import Tasks from '../tasks/index';
import Home from '../home';

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
    </Switch>
  );
};

export default Routes;
