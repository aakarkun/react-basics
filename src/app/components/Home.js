import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.email}</p>
        <p><strong>Age: {this.state.age}</strong></p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
        <hr />
        <button onClick={this.props.sayHello} className="btn btn-info">Say Hello</button>
        <hr />
        <input
          type="text"
          value={this.state.homeLink}
          onChange={(event) => {this.onHandleChange(event)}}
        />&nbsp;&nbsp;
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  email: PropTypes.string,
  sayHello: PropTypes.func,
  initialLinkName: PropTypes.string
}
