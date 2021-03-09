import React from 'react';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ' ',
      lastName: ' ',
      creditCard: ' ',
      amount: ' ',
      creditView: false
    };
    this.donationStage = this.donationStage.bind(this)
  };
  handleClick(amount) {
    event.preventDefault();
    this.setState({ 'amount': amount, 'creditCard': true })
  }
  onChange() {

  }
  donationStage() {
    if (this.state.creditView === true) {
      return (
        <form action="#" className='form-group'>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className='form-input' name='firstName' value={this.state.firstName} onChange={this.onChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className='form-input' name='lastName' value={this.state.lastName} onChange={this.onChange} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="creditCard">CC #</label>
                <input type="number" value={this.state.creditCard} onChange={this.onChange} />
              </div>
            </div>
          </div>
        </form>
      )
    }
    return (
      <div className='container'>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col text-center">
            <button className='btn btn-primary' onClick={() => { this.handleClick(10) }}>$10</button>
          </div>
          <div className="col">
            <button className='btn btn-primary' onClick={() => { this.handleClick(30) }}>$30</button>
          </div>
          <div className="col">
            <button className='btn btn-primary' onClick={() => { this.handleClick(50) }}>$50</button>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <button className='btn btn-primary' onClick={() => this.handleClick('15 Monthly')}>$15 Monthly Donation</button>
          </div>
        </div>
      </div>
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
