import React from 'react';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donationInfo: {
        firstName: '',
        lastName: '',
        creditCard: '',
        amount: '',
      },
      creditView: false
    };
    this.donationStage = this.donationStage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)

  };
  handleClick(amount) {
    event.preventDefault();
    this.setState({ 'amount': amount, 'creditView': true })
  }
  onChange() {
    //FIX THE ISSUE WITH THE SAVING TO STATE     //
    const parameter = event.target.name;
    const value = event.target.value;
    const donationInfo = this.state.donationInfo;
    donationInfo[parameter] = value;
    this.setState({ donationInfo })
  }
  submit() {
    event.preventDefault();
    console.log(this.state.donationInfo)
    this.setState({ 'creditView': 'thankYou' })
    const donateToPetlanthropyRow = document.querySelector('#donate');
    donateToPetlanthropyRow.classList.add('d-none');
  }
  donationStage() {
    if (this.state.creditView === true) {
      return (
        <form className='col d-flex flex-column justify-content-between'>
          <div className="row m-1">
            <div className="col d-flex flex-column">
              <input type="text" className='form-input' name='firstName' value={this.state.firstName} onChange={this.onChange} required placeholder='Full Name' />
            </div>
          </div>
          <div className="row m-1">
            <div className="col d-flex flex-column">
              <input type="text" className='form-input' name='lastName' value={this.state.lastName} onChange={this.onChange} required placeholder='Email' />
            </div>
          </div>
          <div className="row m-1">
            <div className="col d-flex flex-column">
              <input type="text" value={this.state.creditCard} name='creditCard' onChange={this.onChange} required placeholder='Credit Card Number'/>
            </div>
          </div>
          <div className="row m-1">
            <div className="col">
              <button className='sub-button' onClick={this.submit}> Donate! </button>
            </div>
          </div>
        </form>
      )
    } else if (this.state.creditView === false) {
      return (
        <div className='col'>
          <div className="row m-0 d-flex align-items-center justify-content-center">
            <div className="col p-1 ">
              <button className='square-button' onClick={() => { this.handleClick(10) }}>$10</button>
            </div>
            <div className="col p-1 ">
              <button className='square-button' onClick={() => { this.handleClick(30) }}>$30</button>
            </div>
            <div className="col p-1 ">
              <button className='square-button' onClick={() => { this.handleClick(50) }}>$50</button>
            </div>
          </div>
          <div className="row m-0 ">
            <div className="col p-1">
              <button className='bottom-rectangle' onClick={() => this.handleClick('15 Monthly')}>$15 Monthly Donation</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col m-5 ">
          <h2>Thank you for your Donation!</h2>
        </div>
      )
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="container-fluid p-3 h-100 m-0 d-flex flex-column align-items-between justify-content-between">
        <div className="row border-bottom border-danger m-0">
          <div className="col">
            <img className='w-50 pb-2' src='https://static.wixstatic.com/media/577460_c902da9df2784a74bcba2e68f1dda16b~mv2.png/v1/fill/w_279,h_66,al_c,q_85,usm_0.66_1.00_0.01/Petlanthropy-Logo-2b.webp'
              alt="Petlanthropy Logo" />
          </div>
        </div>
        <div id='donate' className="row m-0">
          <div className="col text-center">
            <h1>Donate to Petlanthropy</h1>
          </div>
        </div>

        <div className="row m-0">
          {this.donationStage()}
        </div>

        <div className="row m-0 d-flex">
          <div className="col text-left d-flex">
            <p className='small-font mr-1'>
              Stay Informed
          </p>
            <p className='text-primary small-font'>
              Newsletter Sign Up
            </p>
          </div>
          <div className="col">
            <p className='text-primary small-font text-right'>
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    )
  }
}
