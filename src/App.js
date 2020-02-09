import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { connect } from 'react-redux';

//install the packages use command
//npm install --save redux react-redux

class App extends Component {
  state = {
    showPersons: true,
    showPersonsCSS: "ShowPerson",
  }
  togglePersonsHandler = () => {
    this.setState((preState) =>{return {showPersons: !preState.showPersons}})
  }
  greyBackgroundHandler = () => {
    this.setState({showPersonsCSS: "ShowPerson greyBackground"})
  }
  blueBackgroundHandler = () => {
    this.setState({showPersonsCSS: "ShowPerson blueBackground"})
  }
  render() {
    let persons = null;
    if(this.state.showPersons)
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
      <div className={this.state.showPersonsCSS} onClick={this.togglePersonsHandler}> SHOW PERSONS </div>
      <div className="Container">
        {persons}
      </div>
      <button onClick={this.blueBackgroundHandler}>blue background</button>
      <br />
      <button onClick={this.greyBackgroundHandler}>grey background</button>
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
    deletePerson: (index) => dispatch({type: 'DELETEPERSON',index:index})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
