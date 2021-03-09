import React from 'react';

export default class Widget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: ' ',
      lastName: ' ',
      amount: ' ' ,
      creditCard: false
    };
    this.donationStage = this.donationStage.bind(this)
  };
  handleClick(){
    event.preventDefault();
    const amount = event.target.textContent;
    this.setState({'amount': amount, 'creditCard': true})
  }
  donationStage(){
    if(this.state.creditCard === true) {
      return //credit card information here
    }
    return (
      <form action="#" className='form-container'>
        <div className="row">
          <div className="col">
            <button className='form-button' onClick={this.handleClick}>$10</button>
          </div>
          <div className="col">
            <button className='form-button' onClick={this.handleClick}>$30</button>
          </div>
          <div className="col">
            <button className='form-button' onClick={this.handleClick}>$50</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className='form-button' onClick={this.handleClick}>$15 Monthly Donation</button>
          </div>
        </div>
      </form>
    )

  }
  render(){
    console.log(this.state)
    return(
      <div className="container">

        <div className="row">
          <div className="col">
            <h4>Donate Now</h4>
          </div>
          <div className="col-sm">
            <h2>X</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1>Donate to Petlanthropy</h1>
          </div>
        </div>

        <div className="row">
          {this.donationStage()}
        </div>


      </div>
    )
  }
}
