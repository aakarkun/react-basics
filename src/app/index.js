import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    var college = {
      name: "New Summit College",
      address: "Old Baneshwor, Kathmandu",
      faculty: "Bsc.CSIT"
    };
    var skills = {
      frontend: ["HTML/CSS", "JavaScript", "ReactJS"],
      backend: ["JavaP", "PHP", "NodeJS"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Kus Gautam"} age={21} college={college} skills={skills} email="kusgautam@hotmail.com">
              <p>Thank you! Hope you will love React JS!</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
