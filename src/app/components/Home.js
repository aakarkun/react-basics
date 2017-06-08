import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h4>User Information</h4>
        <h1>{this.props.name}</h1>
        <p>{this.props.email}</p>
        <p>Studying {this.props.college.faculty} at {this.props.college.name}, located at {this.props.college.address}.</p>
        <h5>Skills</h5>
        <h6>Frontend</h6>
          <ul>
            {this.props.skills.frontend.map((frontend, i) => <li key={i}>{frontend}</li>)}
          </ul>
        <h6>Backend</h6>
        <ul>
          {this.props.skills.backend.map((backend, i) => <li key={i}>{backend}</li>)}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  college: PropTypes.object,
  skills: PropTypes.object,
  children: PropTypes.node // from github suggestions node should be use for this types of props and no error
  // children: PropTypes.isRequired // from tutorial but display error
}
