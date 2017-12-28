import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  state = {
    open: false
  }
  
  formatDate = (date) => {
    return `${date.substring(0,10)} à ${date.substring(11,13)}h${date.substring(14,16)}`
  };
  
  toggleOpen = () => {
    this.setState({open: !this.state.open})
  };
  
  renderStepsCity = (bool) => {
    let dataFiltered = null;
    if (!bool) {
      dataFiltered = this.props.dataCity.filter(step => step.event === 'entered_store');
    } else {
      dataFiltered = this.props.dataCity;
    }
    
    return dataFiltered.map( (stepFiltered,id) => {
      return (
        <div className={`step step${this.state.open ? 'Main' : 'Details'}`} key={id}>
          <div className={`bullet bullet${this.state.open ? 'Big' : 'Small'}`}
                onClick={this.toggleOpen}></div>
          <div className='description'>
            {this.formatDate(stepFiltered.timestamp)} : Arrivée en {this.props.number === 0 ? 'entrepôt' : ''} : {stepFiltered.location}
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className='step'>
        {this.renderStepsCity(this.state.open)}
      </div>
    )
  };
}



export default Step;