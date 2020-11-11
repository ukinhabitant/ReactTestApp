import React from 'react';
import './App.css';
import axios from 'axios';
import { render } from 'react-dom';

class TestAPP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Loading...',
      logs: ''
    };
  }

  now() {
    let date = new Date();

    const sy = '-';
    const sm = ":"

    var y, m, d, h, mi, s;
    y = date.getFullYear();
    m = date.getMonth() + 1;
    d = date.getDate();

    h = date.getHours();
    mi = date.getMinutes();
    s = date.getSeconds();

    return y + sy + m + sy + d + ' ' + h + sm + mi + sm + s;
    
  }

  componentDidMount() {
    window.setInterval(() =>{

      axios
      .get('https://api.github.com/')
      .then((ds) => {

        this.setState({
          status: JSON.stringify(ds),
          logs: this.state.logs + 'API called successfully. ' + this.now()
        })

      })
      .catch((error) => {
        this.setState({
          status: JSON.stringify(error),
          logs: this.state.logs + 'API called failed. ' + this.now()
        })
      })

    }, 5000);
  }

  render() {

    return (
      <div>
        <div className="App">
           <h3>API DATA</h3>
            {this.state.status}
        </div>
        <div className="logs">
          <h3>LOGS</h3>
          {this.state.logs}
        </div>

      </div>
    );
  }

}

export default TestAPP;
