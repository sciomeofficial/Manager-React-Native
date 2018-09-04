import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import {Actions} from 'react-native-router-flux'

const RouterComponent = () => {
  return (
    <Router>
    <Scene key='root' hideNavBar="hideNavBar">
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Login'/>
      </Scene>
      <Scene key='main'>
        <Scene rightTitle='Add' initial="initial" onRight={() => Actions.employeeCreate()} key='employeeList' component={EmployeeList} title='Employees'/>
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
      </Scene>
    </Scene>
  </Router>)
}

export default RouterComponent;
