import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { connect } from 'react-redux';

//install the packages use command
//npm install --save redux react-redux

class App extends Component {

  render() {
    let persons = null;
    if(this.props.showPersons)
    persons = this.props.persons.map((person,index) =>{ 
      let cssName;
      if(index % 2 === 0)
        cssName = "Even";
      else
        cssName = "Odd";
      return(
      <div 
        key={index}
        className={cssName} 
        onClick={() => this.props.deletePerson(index)}>
          <Person  name={person.name} age={person.age}/>
      </div>)});

    return (
    <div className="App">
      <div className="ShowPerson" onClick={this.props.togglePersons}> SHOW PERSONS </div>
      <div className="Container">
        {persons}
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showPersons: state.showPersons,
    persons: state.persons,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglePersons: () => dispatch({type: 'TOGGLEPERSONS'}),
    deletePerson: (index) => dispatch({type: 'DELETEPERSON',index:index})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
