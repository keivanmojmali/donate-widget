import React from 'react';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ' ',
      lastName: ' ',
      amount: ' ',
      creditCard: true
    };
    this.donationStage = this.donationStage.bind(this)
  };
  handleClick(amount) {
    event.preventDefault();
    this.setState({ 'amount': amount, 'creditCard': true })
  }
  donationStage() {
    if (this.state.creditCard === true) {
      return (
        <form action="#" className='form-container'>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className='form-input' name='firstName' value={this.state.firstName} onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className='form-input' name='lastName' value={this.state.lastName} onChange={this.onChange}/>

          </div>
        </form>
      )
    }
    return (
      <form action="#" className='form-container'>
        <div className="row">
          <div className="col">
            <button className='form-button' onClick={() => { this.handleClick(10) }}>$10</button>
          </div>
          <div className="col">
            <button className='form-button' onClick={() => { this.handleClick(30) }}>$30</button>
          </div>
          <div className="col">
            <button className='form-button' onClick={() => { this.handleClick(50) }}>$50</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className='form-button' onClick={() => this.handleClick('15 Monthly')}>$15 Monthly Donation</button>
          </div>
        </div>
      </form>
    )

  }
  render() {
    console.log(this.state)
    return (
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
