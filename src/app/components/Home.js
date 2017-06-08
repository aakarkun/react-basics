import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    this.age += 3;
    console.log(this.age);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.email}</p>
        <p><strong>Age: {this.age}</strong></p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  college: PropTypes.object,
  skills: PropTypes.object,
  children: PropTypes.isRequired
}
