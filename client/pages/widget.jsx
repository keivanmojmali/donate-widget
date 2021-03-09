import React from 'react';

export default class Widget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: ' ',
      lastName: ' ',
      amount: ' ' ,

    };
  };
  render(){
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


      </div>
    )
  }
}
