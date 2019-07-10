import React from "react";

import { Formik, Field } from "formik";
import AppContext from "./../AppProvider/AppContext";
import { Link } from "react-router-dom";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Col,
  Form,
  FormGroup,
  Spinner,
  Label,
  Input
} from "reactstrap";

import "./style.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  registerValues = (values, loginUser, setSubmitting) => {
    // Do register thing here after passing values to the api and move the user to another link

    setSubmitting(false);
  };

  render() {
    return (
      <AppContext.Consumer>
        {(user, loginUser) => {
          // this.setState({user});
          return (
            <div className="add-register-wrapper container">
              <Row>
                <Card className="col-sm-8">
                  <CardBody>
                    <CardTitle>
                      <h4 className="text-success">Register</h4>
                    </CardTitle>
                    <Formik
                      initialValues={{
                        email: "",
                        name: "",
                        password: ""
                      }}
                      validate={values => {
                        let errors = {};
                        // Do some validation here
                        if (!values.name) {
                          errors.name = "Name is required";
                        } else if (values.name.length < 3) {
                          errors.name =
                            "Name should be alteast of 3 characters";
                        }

                        if (!values.email) {
                          errors.email = "email is required!";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email";
                        }

                        if (!values.password) {
                          errors.password = "password is required!";
                        } else if (
                          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$/g.test(
                            values.password
                          )
                        ) {
                          errors.password =
                            "password should have one uppercase, one lowercase , one numeral and atleast five characters in total";
                        }

                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        // setSubmitting(false);
                        this.registerValues(values, loginUser, setSubmitting);
                      }}
                      render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                      }) => {
                        return (
                          <Form onSubmit={handleSubmit}>
                            <FormGroup row>
                              <Label for="name" sm={4}>
                                Name
                              </Label>
                              <Col sm={8}>
                                <Input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Your Good name here"
                                  invalid={!!errors.name}
                                  tag={Field}
                                />
                                <div className="invalid-feedback">
                                  {errors && touched.name && errors.name}
                                </div>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="email" sm={4}>
                                Email
                              </Label>
                              <Col sm={8}>
                                <Input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="email-id here"
                                  invalid={!!errors.email}
                                  tag={Field}
                                />
                                <div className="invalid-feedback">
                                  {errors && touched.email && errors.email}
                                </div>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="password" sm={4}>
                                Password
                              </Label>
                              <Col sm={8}>
                                <Input
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Strong password here"
                                  invalid={!!errors.password}
                                  tag={Field}
                                />
                                <div className="invalid-feedback">
                                  {errors &&
                                    touched.password &&
                                    errors.password}
                                </div>
                              </Col>
                            </FormGroup>
                            <Col sm={12} className="register-button">
                              <Button color="success" onClick={handleSubmit}>
                                {isSubmitting ? (
                                  <Spinner size="sm" color="light" />
                                ) : (
                                  "Register"
                                )}
                              </Button>
                            </Col>
                            <Col sm={12}>
                              Already Registered?{" "}
                              <Link to="/login">Login here</Link>
                            </Col>
                          </Form>
                        );
                      }}
                    />
                  </CardBody>
                </Card>
              </Row>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Register;
