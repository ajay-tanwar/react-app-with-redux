import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { first_name, last_name, mobile_number } = this.state;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className="todo">
        <div className="container">
          <div className="row" style={{marginTop:'200px'}}>
            <div className="col-md-6">
              <img src="/assets/image/left_side_image.jpeg" width="100%"/>
            </div>
            <div className="col-md-6" style={{marginTop:'20px'}}>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fitst_name">First Name</label>
                  <input type="text" name="first_name" className="form-control" id="firstName" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name:</label>
                  <input type="text" name="last_name" className="form-control" id="lastName" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="mobile_number">Mobile Number:</label>
                  <input type="text" name="mobile_number" className="form-control" id="mobile_number" onChange={this.handleChange}/>
                </div>
                <button className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  mobile_number: ''
}

export default App;
