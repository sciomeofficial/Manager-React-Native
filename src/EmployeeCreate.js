import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux';
import { employeeUpdate } from './actions';

class EmployeeCreate extends Component{
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jane'
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
          />
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift

  }
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);
