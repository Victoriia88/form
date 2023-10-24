import React, { Component } from "react";

class DataTable extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h2>Ваші дані</h2>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Електронна пошта</th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
