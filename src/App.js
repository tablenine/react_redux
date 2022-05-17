import React, {Component} from "react";
import './App.css';
import DisplayNumberRoot from "./component/DisplayNumberRoot";
import AddNumberRoot from "./component/AddNumberRoot";

class App extends Component {
  state = {number: 10}

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={function (size) {
          this.setState({number: this.state.number + size})
        }.bind(this)}/>
        <DisplayNumberRoot number={this.state.number}/>
      </div>
    );
  }

}

export default App;
