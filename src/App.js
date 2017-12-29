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
    dataByCity: {
      listCities:[],
      dataOrganized: {},
    },
  }
  
  componentDidMount() {
    // API call, setState response in this.state.data
    // then setState listCities
    const dataByCity = this.state.data.reduce((acc, curr) => {
      const val = curr.location;
      if (!acc.dataOrganized[val]) {
        acc.listCities.push(val)
        acc.dataOrganized[val] = [];
      }
      acc.dataOrganized[val].push(curr);
      return acc;
    }, {
      listCities:[],
      dataOrganized: {},
    });
    this.setState({
      dataByCity: dataByCity
    })
  }
  
  renderSteps = () => {
    const { dataByCity } = this.state;
      return dataByCity.listCities.map( (city,id) => {
        return (
          <div className='stepContainer' key={id}>
            <Step
              number={(dataByCity.listCities.length-1)-id}
              dataCity={dataByCity.dataOrganized[city]}
              />
          </div>
        )
      })
  };
  
  render() {
    return (
      <div className='data-logistic'>
        {this.renderSteps()}
      </div>
    )
  };
  
}

export default App;
