import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Step.css';

class Step extends Component {
  state = {
    open: false
  }
  
  formatDate = (date) => {
    return `${date.substring(0,10).replace(/-/g, '/')} à ${date.substring(11,16).replace(/:/, 'h')}`
  };
  
  toggleOpen = () => {
    this.setState({open: !this.state.open})
  };
  
  renderStepsCity = (bool) => {
    const { dataCity, number } = this.props;
    console.log(dataCity);
    const { open } = this.state;
    return dataCity.map( (oneEvent,id) => {
      return (
        <div className='stepLine' key={id}>
          {oneEvent.event === 'entered_store' && !open && 
            <div className='stepMain'>
              <div className='bullet bulletBig' onClick={this.toggleOpen}></div>
              <div className='description'>
                {this.formatDate(oneEvent.timestamp)} : Arrivée en {number === 0 ? 'entrepôt' : 'centre de logistique / boutique'} : {oneEvent.location}
              </div>
            </div>
          }
          {open && 
            <div className='stepDetails'>
              <div className='bullet bulletSmall' onClick={this.toggleOpen}></div>
              <div className='description'>
                {this.formatDate(oneEvent.timestamp)} : Arrivée en {number === 0 ? 'entrepôt' : 'centre de logistique / boutique'} : {oneEvent.location}
              </div>
            </div>
          }
        </div>
      )
    })
  }
  
  render() {
    const { open } = this.state;
    return (
      <div className='step'>
        {this.renderStepsCity(open)}
      </div>
    )
  };
}

Step.propTypes = {
  dataCity: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
};

export default Step;