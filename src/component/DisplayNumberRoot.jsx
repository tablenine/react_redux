import React, {Component} from "react";
import DisplayNumber from "../container/DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber onAdd={function () {
          console.log(10 + 3);
        }} unit="kg"/>
      </div>
    );
  }
}
