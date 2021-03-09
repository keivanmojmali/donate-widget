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
    this.setState({donationInfo})
  }
  submit(){
    event.preventDefault();
    console.log(this.state.donationInfo)
    this.setState({'creditView': 'thankYou'})
  }
  donationStage() {
    if (this.state.creditView === true) {
      return (
        <form className='.col'>
          <div className="row">
            <div className="col d-flex flex-column">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className='form-input' name='firstName' value={this.state.firstName} onChange={this.onChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className='form-input' name='lastName' value={this.state.lastName} onChange={this.onChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column">
              <label htmlFor="creditCard">CC #</label>
              <input type="number" value={this.state.creditCard} name='creditCard' onChange={this.onChange} required/>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button className='btn btn-primary btn-lg' onClick={this.submit}> Donate! </button>
            </div>
          </div>
        </form>
      )
    } else if (this.state.creditView === false) {
    return (
      <div className='col'>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <button className='btn w-100 btn-primary' onClick={() => { this.handleClick(10) }}>$10</button>
          </div>
          <div className="col">
            <button className='btn w-100 btn-primary' onClick={() => { this.handleClick(30) }}>$30</button>
          </div>
          <div className="col">
            <button className='btn w-100 btn-primary' onClick={() => { this.handleClick(50) }}>$50</button>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <button className='btn w-100  btn-primary' onClick={() => this.handleClick('15 Monthly')}>$15 Monthly Donation</button>
          </div>
        </div>
      </div>
    )
    } else {
      return (
        <div className="col">
          <h2>Thank you for your Donation!</h2>
        </div>
      )
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="container-fluid p-3">
        <div className="row border-bottom border-danger">
          <div className="col">
            <img className='w-50 pb-2' src='https://static.wixstatic.com/media/577460_c902da9df2784a74bcba2e68f1dda16b~mv2.png/v1/fill/w_279,h_66,al_c,q_85,usm_0.66_1.00_0.01/Petlanthropy-Logo-2b.webp'
            alt="Petlanthropy Logo"/>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
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
