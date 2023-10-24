import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {},
    };
  }

  validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };

    if (name === "name") {
      if (value.trim() === "") {
        errors.name = `Поле "Ім'я" обов'язкове для заповнення`;
      } else if (/\d/.test(value)) {
        errors.name = `Поле "Ім'я" не повинно містити цифри`;
      } else {
        errors.name = "";
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        errors.email = `Поле "Електронна пошта" обов'язкове для заповнення`;
      } else if (!this.validateEmail(value)) {
        errors.email = `Введіть коректну адресу електронної пошти`;
      } else {
        errors.email = "";
      }
    }

    if (name === "phone") {
      if (value.trim() === "") {
        errors.phone = `Поле 'Телефон' обов'язкове для заповнення`;
      } else if (!/^\d{12}$/.test(value)) {
        errors.phone = `Номер телефону повинен містити рівно 12 цифр`;
      } else {
        errors.phone = "";
      }
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, errors } = this.state;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      Object.values(errors).some((error) => error !== "")
    ) {
      alert(`Будь ласка, виправте помилки в формі.`);
    } else {
      alert(`Форму відправлено успішно!`);

      this.props.updateDataTable({ name, email, phone });

      this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {},
      });
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Ім'я:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>Електронна пошта:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Телефон:</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <button type="submit">Відправити</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
