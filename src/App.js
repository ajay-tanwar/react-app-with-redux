import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="app" style={{textAlign:"center"}}>
      <h1>React and Redux Example</h1>
      <h3>This Value is Reducer State New Value: <span style={{color:"gray"}}>{props.name}</span></h3>

      <button onClick={ ()=>{ props.hanldeChange("Era") }}>Change It</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToPorps = (dispatch) => {
  return {
    hanldeChange:(name) => {
      dispatch({type:"CHANGE_NAME", payload: name})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(App);
