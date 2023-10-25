import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(`Поле "Ім'я" обов'язкове для заповнення`)
      .matches(/^[^0-9]+$/, `Поле "Ім'я" не повинно містити цифри`),
    email: Yup.string()
      .required(`Поле "Електронна пошта" обов'язкове для заповнення`)
      .email(`Введіть коректну адресу електронної пошти`),
    phone: Yup.string()
      .required(`Поле "Телефон" обов'язкове для заповнення`)
      .matches(/^\d{12}$/, `Номер телефону повинен містити рівно 12 цифр`),
  });

  handleSubmit = (values, { resetForm }) => {
    alert(`Форму відправлено успішно!`);
    this.props.updateDataTable(values);

    resetForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div>
        <Formik
          initialValues={{ name, email, phone }}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Ім'я:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="p" className="error" />
              </div>
              <div>
                <label>Електронна пошта:</label>
                <Field type="text" name="email" />
                <ErrorMessage name="email" component="p" className="error" />
              </div>
              <div>
                <label>Телефон:</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="p" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Відправити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default RegistrationForm;
