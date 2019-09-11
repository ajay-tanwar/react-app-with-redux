import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <div className="app">
      <h3 style={{textAlign:"center"}}>This Value is Reducer State Value: <span style={{color:"gray"}}>{props.name}</span></h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, null)(App);
