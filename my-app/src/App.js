import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import DataTable from "./DataTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: [],
    };
  }

  updateDataTable = (data) => {
    this.setState((prevState) => ({
      submittedData: [...prevState.submittedData, data],
    }));
  };

  render() {
    return (
      <div>
        <RegistrationForm updateDataTable={this.updateDataTable} />
        <DataTable data={this.state.submittedData} />
      </div>
    );
  }
}

export default App;
