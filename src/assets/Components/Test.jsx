import React from "react";

class Test extends React.Component {
  // STATE SO QUE EM FORMA DE CLASSE DO JAVASCRIPT
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!",
    };
  }

  componentDidMount() {
    // USEEFFECT SO QUE EM FORMA DE CLASS DO JAVASCRIPT
    console.log("É EXECUTADO A PARTIR DISSO!");
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
