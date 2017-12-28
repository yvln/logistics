import React, { Component } from 'react';
import Step from './components/Step';
import './App.css';

class App extends Component {
  state = {
    data: [
      { 'event': 'entered_store', 'timestamp': '02-12-2017T12:01', 'location': 'Paris' },
      { 'event': 'scan', 'timestamp': '01-12-2017T18:01', 'location': 'Lyon' },
      { 'event': 'entered_store', 'timestamp': '01-12-2017T16:01', 'location': 'Lyon' },
      { 'event': 'scan', 'timestamp': '01-12-2017T14:01', 'location': 'Marseille' },
      { 'event': 'scan', 'timestamp': '01-12-2017T13:01', 'location': 'Marseille' },
      { 'event': 'entered_store', 'timestamp': '01-12-2017T12:01', 'location': 'Marseille' },
    ],
    listCities: [],
  }
  
  componentDidMount() {
    // API call, setState response in this.state.data
    // then setState listCities
    const cities = this.state.data.reduce((acc, curr) => {
      if (acc.indexOf(curr.location) === -1) {
        acc.push(curr.location)
      }
      return acc;
    }, []);
    this.setState({
      listCities: cities
    })
  }
  
  renderSteps = () => {
    return this.state.listCities.map( (city,id) => {
      return (
        <div className='stepContainer' key={id}>
          <Step
            number={(this.state.listCities.length-1)-id}
            dataCity={this.state.data.filter(step => step.location === city)}
            />
        </div>
      )
    })
  };
  
  render() {
    return (
      <div className="data-logistic">
        {this.renderSteps()}
      </div>
    )
  };
  
}

export default App;
